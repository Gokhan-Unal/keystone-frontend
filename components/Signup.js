import { gql, useMutation } from '@apollo/client';
import React from 'react';
import useForm from '../hooks/useForm';
import { useRouter } from 'next/dist/client/router';
import { FormStyles } from './styles/FormStyles';

const SIGNUP_MUTATION = gql`
  mutation Signup($email: String!, $name: String!, $password: String!) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      id
      email
      name
    }
  }
`;

export default function SignUp() {
  const router = useRouter();
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    name: '',
    password: '',
  });
  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await signup().catch((error) => console.log(error));
    resetForm();
  }

  return (
    <FormStyles method="POST" onSubmit={handleSubmit}>
      <h2>Sign Up For an Account</h2>
      <p>{error ? error.message : undefined}</p>
      {data?.createUser && (
        <p>Signed up with {data.createUser.email} - Please Go Head and Sign in!</p>
      )}
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          autoComplete="name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          autoComplete="email"
          value={inputs.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password">
        Password:
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
        Sign Up!
      </button>
    </FormStyles>
  );
}
