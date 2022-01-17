import React from 'react';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/course">Courses</Link>
      <Link href="/account">Account</Link>
    </nav>
  );
}
