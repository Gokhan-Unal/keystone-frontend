import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  html {
    --blue: skyblue;
    --black: '#393939';
    --gray: '#3A3A3A';
    --max-width: 1450px;
    --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 62.5%;
    line-height: 2;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  a:hover {
    /* text-decoration: underline; */
  }

`;

const InnerStyles = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2rem;
`;

/**
 * @description wrapper
 */
export default function Page({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </>
  );
}
