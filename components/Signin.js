import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import useForm from '../hooks/useForm';
import { CURRENT_USER_QUERY } from '../hooks/useUser';
import { FormStyles } from './Signup';

const SIGNIN_MUTATION = gql`
  mutation Signin($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          name
          email
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;

export default function Signin() {
  const router = useRouter();
  const { handleChange, resetForm, inputs } = useForm({
    email: '',
    password: '',
  });

  const [signIn, { data, loading }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn();
    resetForm();
    if (
      res.data.authenticateUserWithPassword.__typename ===
      'UserAuthenticationWithPasswordSuccess'
    ) {
      router.push('/');
    }
  };

  const error =
    data?.authenticateUserWithPassword.__typename ===
    'UserAuthenticationWithPasswordFailure'
      ? data?.authenticateUserWithPassword.message
      : undefined;

  return (
    <FormStyles method="POST" onSubmit={handleSubmit}>
      <h2>Sign in to your account</h2>
      <p>{error ? error : undefined}</p>
      <label htmlFor="email">
        Email
        <input
          placeholder="Your Email Address"
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={inputs.email}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="password"
          value={inputs.password}
          onChange={handleChange}
        />
      </label>
      <button disabled={loading} type="submit">
        Sign In
      </button>
    </FormStyles>
  );
}
