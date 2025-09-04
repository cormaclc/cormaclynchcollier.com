import React from 'react';
import Link from 'next/link';

// styles
import './Header.scss';

export const Header = () => {
  return <div className="header">
    <p className="name">Cormac Lynch-Collier</p>
    <div>
      <Link className="header-link" style={{ marginRight: '1rem'}} href="/">home</Link>
      <Link className="header-link" href="mailto:cormac.collier@gmail.com">contact</Link>
    </div>
  </div>;
};