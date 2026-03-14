import React, { useState } from 'react';
import Link from 'next/link';

// styles
import './Header.scss';

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <header className="header">
      <button
        className={`hamburger ${open ? 'is-open' : ''}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`menu-overlay ${open ? 'visible' : ''}`} onClick={handleClose} aria-hidden={!open} />

      <nav className={`header-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <Link className="header-link" href="/andnatalie" onClick={handleClose}>Home</Link>
        <Link className="header-link" href="/andnatalie/rsvp" onClick={handleClose}>RSVP</Link>
        <Link className="header-link" href="/andnatalie/accommodation" onClick={handleClose}>Accommodation</Link>
        <Link className="header-link" href="/andnatalie/schedule" onClick={handleClose}>Schedule</Link>
        <Link className="header-link" href="/andnatalie/registry" onClick={handleClose}>Registry</Link>
        <Link className="header-link" href="/andnatalie/visitstowe" onClick={handleClose}>Visit Stowe</Link>
      </nav>
    </header>
  );
};