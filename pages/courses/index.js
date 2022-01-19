import React from 'react';
import Courses from '../../components/Courses';
import { useRouter } from 'next/router';
import Pagination from '../../components/Pagination';

export default function CoursePage() {
  const { query } = useRouter();
  console.log(query);
  const page = parseInt(query.page);
  return (
    <>
      <Pagination page={page || 1} />
      <Courses page={page || 1} />
      <Pagination page={page || 1} />
    </>
  );
}
