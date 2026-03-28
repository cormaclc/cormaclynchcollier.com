import React from 'react';

// styles
import '../../../styles/wedding/base.scss';

interface ImageProps {
  fileName: string;
  description: string;
  hideDescriptionText?: boolean;
}

export const Image = ({ fileName, description, hideDescriptionText }: ImageProps) => {
  return (
    <div style={{ marginTop: '1rem' }}>
      <img src={`/images/wedding/${fileName}`} alt={description} />
      {!hideDescriptionText && <p style={{ marginTop: '0.5rem' }}>{description}</p>}
    </div>
  );
};