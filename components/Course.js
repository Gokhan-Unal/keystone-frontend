import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Title from './styles/Title';
import ItemStyles, { Edit } from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';

export default function Course({ course }) {
  return (
    <ItemStyles>
      <Image
        width="300"
        height="200"
        quality={100}
        src={course?.photo?.image?.publicUrlTransformed}
        alt={course.name}
      />
      <Edit>
        <Link
          href={{
            pathname: '/update',
            query: { id: course.id },
          }}
        >
          Edit
        </Link>
      </Edit>
      <Title>
        <Link href={`/course/${course.id}`}>{course.name}</Link>
      </Title>
      <PriceTag>{formatMoney(course.price)}</PriceTag>
      <p>{course.description}</p>
    </ItemStyles>
  );
}
