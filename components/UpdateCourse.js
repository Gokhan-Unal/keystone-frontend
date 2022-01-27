import React from 'react';
import { useQuery, gql } from '@apollo/client';

const SINGLE_COURSE_QUERY = gql`
  query getSingleCourse($id: ID!) {
    singleCourse: course(where: { id: $id }) {
      id
      name
      description
      status
      photo {
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

const UPDATE_COURSE_MUTATION = gql`
  mutation updateCourse(
    $id: ID!
    $name: String
    $description: String
    $status: String
    $price: Int
  ) {
    updateCourse(
      where: { id: $id }
      data: { name: $name, description: $description, status: $status, price: $price }
    ) {
      id
      name
      description
      status
      price
    }
  }
`;

export default function UpdateCourse({ id }) {
  const { loading, error, data } = useQuery(SINGLE_COURSE_QUERY, {
    variables: { id },
  });

  return <div></div>;
}
