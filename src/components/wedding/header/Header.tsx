import React from 'react';
import Link from 'next/link';

// styles
import './Header.scss';

export const Header = () => {
  return (
    <div>
      <Link className="header-link" href="/and-natalie">Home</Link>
      <Link className="header-link" href="/and-natalie/rsvp">RSVP</Link>
    </div>
  );
};