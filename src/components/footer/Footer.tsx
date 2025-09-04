import React from 'react';
import Image from 'next/image';

// styles
import './Footer.scss';

export const Footer = () => {
  return <div className="footer">
    <a className="navbar-brand" style={{ marginRight: '1rem' }} href="https://github.com/cormaclc/" target="_blank" rel="noreferrer">
      <Image src="/images/github-logo.png" width="50" height="50" alt="Github" />
    </a>
    <a className="navbar-brand" href="https://www.linkedin.com/in/cormac-lynch-collier-9023b5156/" target="_blank" rel="noreferrer">
      <Image src="/images/linkedin-logo.png" width="50" height="50" alt="LinkedIn" />
    </a>
  </div>;
};