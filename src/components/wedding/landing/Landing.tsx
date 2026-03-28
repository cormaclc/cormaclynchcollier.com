import React from 'react';
import { Typewriter } from '../../Typewriter';
import { BOLDED_CONTENT, IMAGES, LANDING_PAGE_CONTENT } from '../../../content/wedding/landing';
import { Image } from '../image/Image';

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
    {BOLDED_CONTENT.map((item, index) => (
      <p className='landing-paragraph bolded-landing-paragraph' key={index}><strong>{item}</strong></p>
    ))}
    <a className='custom-button rsvp-button' href="/andnatalie/rsvp">Click here to RSVP</a>
    {IMAGES.map((image, index) => (
      <Image key={index} fileName={image.fileName} description={image.description} />
    ))}
  </div>;
};