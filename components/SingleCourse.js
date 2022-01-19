import { gql, useQuery } from '@apollo/client';
import React from 'react';
import Image from 'next/image';

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

export default function SingleCourse({ id }) {
  const { loading, error, data } = useQuery(SINGLE_COURSE_QUERY, {
    variables: { id },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  // loading den önce çekmeye çalışırsan patlar
  const { singleCourse } = data;

  return (
    <div>
      <Image
        width="600"
        height="400"
        quality={100}
        src={singleCourse?.photo?.image?.publicUrlTransformed}
        alt={singleCourse?.name}
      />
      <h1>{singleCourse?.name}</h1>
      <p>{singleCourse?.description}</p>
    </div>
  );
}
