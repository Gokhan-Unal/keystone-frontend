import { gql, useQuery } from '@apollo/client';
import React from 'react';
import Image from 'next/image';

const SINGLE_COURSE_QUERY = gql`
  query getSingleCourse {
    singleCourse: course(where: { id: "ckyj19rls0509kcg6webvjujv" }) {
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
        width="800"
        height="600"
        quality={100}
        src={singleCourse?.photo?.image?.publicUrlTransformed}
        alt={singleCourse.name}
      />
      <h1>{singleCourse?.name}</h1>
    </div>
  );
}
