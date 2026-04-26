import React from 'react';
import { DESCRIPTION, REGISTRY_LINK } from '../../../content/wedding/registry';

// styles
import '../../../styles/wedding/base.scss';
import './RegistryContent.scss';

export const RegistryContent = () => {
  return <>
    {DESCRIPTION.map((paragraph, i) => 
      <p key={`registry-content-${i}`} className="margin-bottom">
        {paragraph.text.map((line, j) => <span key={`registry-content-line-${i}-${j}`}>{line}<br/></span>)}
      </p>
    )}
    <a style={{ marginTop: '.5rem' }} className='custom-button' href={REGISTRY_LINK} target="_blank" rel="noopener noreferrer">
      Crate & Barrel Registry
    </a>
  </>;
};