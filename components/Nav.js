import React from 'react';
import Link from 'next/link';
import NavStyles from './styles/NavStyles';

export default function Nav() {
  return (
    <NavStyles>
      <li>
        <Link href="/course">Courses</Link>
      </li>
      <li>
        <Link href="/account">Account</Link>
      </li>
    </NavStyles>
  );
}
