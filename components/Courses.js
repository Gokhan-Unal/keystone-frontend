import React from 'react';
import { useQuery, gql } from '@apollo/client';
import styled from 'styled-components';
import Course from './Course';
import { perPage } from '../config';

export const ALL_COURSES_QUERY = gql`
  query getAllCourses($skip: Int = 0, $take: Int) {
    allCourses: courses(take: $take, skip: $skip) {
      id
      name
      description
      status
      price
      photo {
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

export default function Courses({ page }) {
  const { loading, error, data } = useQuery(ALL_COURSES_QUERY, {
    variables: {
      skip: page * perPage - perPage, // page => 1 =>  1 * 4 - 4 = 0
      take: perPage,
    },
  });

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

  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
