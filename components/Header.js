import React from 'react';
import Link from 'next/link';
import Nav from './Nav';
import styled from 'styled-components';

const Logo = styled.div`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  background: skyblue;
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  .main {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }
  .sub-main {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid black;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="main">
        <Logo>
          <Link href="/">dalta</Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-main">
        <p>Search</p>
      </div>
    </HeaderStyles>
  );
}
