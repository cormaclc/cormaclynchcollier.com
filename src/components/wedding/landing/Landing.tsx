import React from 'react';
import { Typewriter } from '../../Typewriter';
import { LANDING_PAGE_CONTENT } from '../../../content/wedding/landing';

// styles
import '../../../styles/wedding/base.scss';
import './Landing.scss';

const TYPEWRITER_CONTENT = ['married!', 'wedded!', 'hitched!', 'joined in matrimony!'];

export const Landing = () => {
  return <div className='content-wrapper'>
    <h3>We are getting <Typewriter text={TYPEWRITER_CONTENT} /></h3>
    {LANDING_PAGE_CONTENT.map((paragraph, index) => (
      <p className='landing-paragraph' key={index}>{paragraph}</p>
    ))}
  </div>;
};