import { gql, useQuery } from '@apollo/client';
import React from 'react';
import Link from 'next/link';
import { perPage } from '../config';
import styled from 'styled-components';

const PAGINATION_QUERY = gql`
  query count {
    coursesCount
  }
`;

export default function Pagination({ page }) {
  const { loading, error, data } = useQuery(PAGINATION_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const { coursesCount } = data;
  const pageCount = Math.ceil(coursesCount / perPage);

  return (
    <PageStyles>
      <Link href={`/courses/${page - 1}`}>
        <a aria-disabled={page <= 1}>Previous</a>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <Link href={`/courses/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next</a>
      </Link>
    </PageStyles>
  );
}

const PageStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0;
  a[aria-disabled='true'] {
    color: #ccc;
    pointer-events: none;
  }
`;
