import React from 'react';
import Link from 'next/link';

// styles
import './Header.scss';

// TODO: handle mobile styling (e.g. hamburger menu)
export const Header = () => {
  return (
    <div>
      <Link className="header-link" href="/andnatalie">Home</Link>
      <Link className="header-link" href="/andnatalie/rsvp">RSVP</Link>
      <Link className="header-link" href="/andnatalie/accommodation">Accommodation</Link>
      <Link className="header-link" href="/andnatalie/schedule">Schedule</Link>
      <Link className="header-link" href="/andnatalie/registry">Registry</Link>
      <Link className="header-link" href="/andnatalie/visitstowe">Visit Stowe</Link>
    </div>
  );
};