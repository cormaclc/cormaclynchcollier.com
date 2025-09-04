import React, { type ReactNode } from 'react';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';

export const Bookends = ({ children} : { children: ReactNode}) => {
  return <>
    <Header />
    {children}
    <Footer />
  </>;
};