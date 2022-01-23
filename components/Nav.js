import React from 'react';
import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import useUser from '../hooks/useUser';
import Signout from './Signout';

export default function Nav() {
  const user = useUser();
  // console.log(user);
  return (
    <NavStyles>
      <li>
        <Link href="/courses">Courses</Link>
      </li>
      {user && (
        <>
          <li>
            <Link href="/account">Account</Link>
          </li>
          <Signout />
          <li>
            <a>Welcome back {user.name}</a>
          </li>
        </>
      )}
      {!user && (
        <>
          <li>
            <Link href="/signup">Sign Up</Link>
          </li>
          <li>
            <Link href="/signin">Sign In</Link>
          </li>
          <li>
            <Link href="/account">Account</Link>
          </li>
        </>
      )}
    </NavStyles>
  );
}
