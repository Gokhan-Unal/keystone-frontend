import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Title from './styles/Title';
import ItemStyles, { Edit } from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import setContrast from '../lib/randomColor';

export default function Course({ course }) {
  const { textColour, backgroundColour } = setContrast();
  let color = textColour;
  let backgroundColor = backgroundColour;

  useEffect(() => {
    const edit = document.getElementById(`edit`);
    edit.style.color = color;
    edit.style.backgroundColor = backgroundColor;
    console.log(color);
  });
  return (
    <ItemStyles>
      <Image
        width="300"
        height="200"
        quality={100}
        src={course?.photo?.image?.publicUrlTransformed}
        alt={course.name}
      />
      <Edit color={color} backgroundColor={backgroundColor} id="edit">
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
