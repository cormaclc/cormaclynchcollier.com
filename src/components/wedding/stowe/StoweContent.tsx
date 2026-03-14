import React from 'react';
import { STOWE_CONTENT } from '../../../content/wedding/stowe';

// styles
import '../../../styles/wedding/base.scss';

// TODO: better styling???
export const StoweContent = () => {
  return <div>
    {
      STOWE_CONTENT.map((section) => (
        <div key={section.header}>
          <h4>{section.header}</h4>
          <div>
            {section.content.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      ))
    }
  </div>;
};