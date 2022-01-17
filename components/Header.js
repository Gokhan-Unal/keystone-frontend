import React from 'react';
import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">Teach</Link>
      </div>
      <div>
        <p>Search</p>
      </div>
      <Nav />
    </header>
  );
}
