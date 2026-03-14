import React from 'react';
import { Header } from '../../components/wedding/header/Header';
import { StoweContent } from '../../components/wedding/stowe/StoweContent';

// styles
import '../../styles/wedding/base.scss';

export const VisitStowe = () => {
  return <div>
    <Header />
    <div className='content-wrapper'>
      <h3>Visit Stowe</h3>
      <StoweContent />
    </div>
  </div>;
};

export default VisitStowe;