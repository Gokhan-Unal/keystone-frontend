import React from 'react';
import Link from 'next/link';
import Nav from './Nav';
import styled from 'styled-components';

const Logo = styled.div`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  background: var(--blue);
  transform: skew(-10deg);
  transition: filter 0.5s ease-in-out;
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
  &:hover {
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.3));
  }

  @media (max-width: 700px) {
    font-size: 3rem;
  }
`;

const HeaderStyles = styled.header`
  .main {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    border-bottom: 5px solid var(--black);

    @media (max-width: 1300px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
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
          <Link href="/">Eddie</Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-main">
        <p>Search</p>
      </div>
    </HeaderStyles>
  );
}
