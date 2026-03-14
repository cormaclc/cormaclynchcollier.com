import React from 'react';
import Link from 'next/link';

// styles
import './Header.scss';

export const Header = () => {
  return (
    <div>
      <Link className="header-link" href="/andnatalie">Home</Link>
      <Link className="header-link" href="/andnatalie/rsvp">RSVP</Link>
      <Link className="header-link" href="/andnatalie/accommodation">Accommodation</Link>
    </div>
  );
};