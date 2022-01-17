import React from 'react';
import SingleCourse from '../../components/SingleCourse';

export default function SingleCoursePage({ query }) {
  console.log(query);
  return <SingleCourse id={query.id} />;
}
