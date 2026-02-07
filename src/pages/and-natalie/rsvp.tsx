import React from 'react';
import { Header } from '../../components/wedding/header/Header';
import { RSVPContent } from '../../components/wedding/rsvp/rsvpContent';

// styles
import '../../styles/wedding/base.scss';

const RSVP = () => {
  return <div>
    <Header />
    <RSVPContent />
  </div>;
};

export default RSVP;