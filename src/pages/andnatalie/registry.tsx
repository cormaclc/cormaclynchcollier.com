import React from 'react';
import { Header } from '../../components/wedding/header/Header';
import { RegistryContent } from '../../components/wedding/registry/RegistryContent';

// styles
import '../../styles/wedding/base.scss';

export const Registry = () => {
  return <div>
    <Header />
    <div className='content-wrapper'>
      <h3>Registry</h3>
      <RegistryContent />
    </div>
  </div>;
};

export default Registry;