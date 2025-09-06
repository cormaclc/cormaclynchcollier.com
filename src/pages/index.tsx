import React from 'react';
import { Bookends } from '../components/Bookends';
import Link from 'next/link';
import { Typewriter } from '../components/Typewriter';
import { LINKS, SKILLS } from '../content/index';

// styles
import '../styles/base.scss';
import './index.scss';

export default function Page() {
  return (
    <Bookends>
      <div className='home-wrapper'>
        {LINKS.map((link) => (
          <Link key={`link-${link.href}`} href={link.href} className='home-link'>
            <h1>{link.text}</h1>
          </Link>
        ))}
      </div>
      <p className='description'>
            I am a full-stack developer<br />
            with experience in <Typewriter text={SKILLS} customClassName='typewriter' />
      </p>
    </Bookends>
  );
}
