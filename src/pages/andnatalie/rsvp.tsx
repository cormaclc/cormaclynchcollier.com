import React from 'react';
import { Header } from '../../components/wedding/header/Header';
import { RSVPForm } from '../../components/wedding/rsvp/RsvpForm';
import { SUBTITLE, TITLE } from '../../content/wedding/rsvp';
import { Divider } from '../../components/wedding/divider/Divider';

// styles
import '../../styles/wedding/base.scss';

const RSVP = () => {
  return <div>
    <Header />
    <div className='content-wrapper'>
      <h3>{TITLE}</h3>
      <p>{SUBTITLE}</p>
      <Divider />
      <RSVPForm />
    </div>
  </div>;
};

export default RSVP;