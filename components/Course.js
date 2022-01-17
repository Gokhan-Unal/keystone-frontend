import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';

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
      <Title>
        <Link href={`/course/${course.id}`}>{course.name}</Link>
      </Title>
      {/* <PriceTag>{formatMoney(product.price)}</PriceTag> */}
      <p>{course.description}</p>
    </ItemStyles>
  );
}
