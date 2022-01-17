import React from 'react';
import { useQuery, gql } from '@apollo/client';
import styled from 'styled-components';
import Course from './Course';

const ALL_COURSES_QUERY = gql`
  query ALL_COURSES_QUERY {
    allCourses: courses {
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

export default function Courses() {
  const { loading, error, data } = useQuery(ALL_COURSES_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <CourseList>
      {data.allCourses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </CourseList>
  );
}

const CourseList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
`;
