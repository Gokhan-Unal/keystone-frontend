import React from 'react';
import Courses from '../../components/Courses';
import { useRouter } from 'next/router';
import Pagination from '../../components/Pagination';
import Search from '../../components/Search';

export default function CoursePage() {
  const { query } = useRouter();
  // console.log(query);
  const page = parseInt(query.page);
  return (
    <>
      <Search />
      <Pagination page={page || 1} />
      <Courses page={page || 1} />
      <Pagination page={page || 1} />
    </>
  );
}
