import React from 'react';
import Header from './Header';

/**
 * @description wrapper
 */
export default function Page({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
