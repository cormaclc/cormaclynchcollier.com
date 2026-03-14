import React from 'react';
import { Typewriter } from '../../Typewriter';
import { BOLDED_CONTENT, LANDING_PAGE_CONTENT } from '../../../content/wedding/landing';

// styles
import '../../../styles/wedding/base.scss';
import './Landing.scss';

const TYPEWRITER_CONTENT = ['married!', 'wedded!', 'hitched!', 'joined in matrimony!'];

export const Landing = () => {
  return <div className='content-wrapper'>
    <h3>We are getting <Typewriter text={TYPEWRITER_CONTENT} /></h3>
    {/* TODO: INSERT IMAGE */}
    <p style={{ marginBottom: '10px' }}>TODO: insert image</p>
    {LANDING_PAGE_CONTENT.map((paragraph, index) => (
      <p className='landing-paragraph' key={index}>{paragraph}</p>
    ))}
    {BOLDED_CONTENT.map((item, index) => (
      <p className='landing-paragraph bolded-landing-paragraph' key={index}><strong>{item}</strong></p>
    ))}
    <a className='custom-button rsvp-button' href="/andnatalie/rsvp">Click here to RSVP</a>
  </div>;
};