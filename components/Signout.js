import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { CURRENT_USER_QUERY } from '../hooks/useUser';

const SIGNOUT_MUTATION = gql`
  mutation Signout {
    endSession
  }
`;

export default function Signout() {
  const [signout] = useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <>
      <button onClick={signout}>Signout</button>
    </>
  );
}
