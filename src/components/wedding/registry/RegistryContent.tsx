import React from 'react';
import { DESCRIPTION } from '../../../content/wedding/registry';
// import { Divider } from '../divider/Divider';

// styles
import '../../../styles/wedding/base.scss';
import './RegistryContent.scss';

const getClassNames = (bold: boolean | undefined, marginBottom: boolean): string => {
  let classNames = '';
  if (bold) {
    classNames += 'bold-text';
  }
  if (marginBottom) {
    classNames += ' margin-bottom';
  }
  return classNames;
};

export const RegistryContent = () => {
  return <>
    {DESCRIPTION.map((paragraph, i) => 
      <p key={`registry-content-${i}`} className={getClassNames(paragraph.bold, i < DESCRIPTION.length - 1)}>
        {paragraph.text}
      </p>
    )}
    {/* <Divider /> */}
    {/* <a className='custom-button' href="https://www.crateandbarrel.com/" target="_blank" rel="noopener noreferrer">
      Gift Registry at Crate and Barrel
    </a> */}
  </>;
};