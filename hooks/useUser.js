import { gql, useQuery } from '@apollo/client';
import React from 'react';

export const CURRENT_USER_QUERY = gql`
  query user {
    authenticatedItem {
      ... on User {
        id
        name
        email
      }
    }
  }
`;

export default function useUser() {
  const { data } = useQuery(CURRENT_USER_QUERY);

  return data?.authenticatedItem;
}
