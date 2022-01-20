import { gql, useMutation } from '@apollo/client';
import React from 'react';
import useForm from '../hooks/useForm';
import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';

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
    await signup().catch(console.error);
    resetForm();
    router.push('/signin');
  }
  return (
    <FormStyles method="POST" onSubmit={handleSubmit}>
      <h2>Sign Up For an Account</h2>
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

export const FormStyles = styled.form`
  margin: 0 auto;
  padding: 2rem;
  font-size: 1.2rem;
  line-height: 2;
  box-shadow: var(--bs);
  background: rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  max-width: 500px;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input {
    padding: 0.5rem;
    border: 3px solid #ccc;
    border-radius: 3px;
    width: 100%;
  }

  button {
    background: var(--blue);
    color: var(--offWhite);
    border: none;
    padding: 1rem 1.5rem;
    cursor: pointer;
  }
`;
