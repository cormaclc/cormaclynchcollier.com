import React from 'react';
import Link from 'next/link';

// styles
import './Header.scss';

export const Header = () => {
  return (
    <div>
      <Link className="header-link" style={{ marginRight: '1rem'}} href="/and-natalie">home</Link>
    </div>
  );
};