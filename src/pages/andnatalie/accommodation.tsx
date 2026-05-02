import React from 'react';
import { Header } from '../../components/wedding/header/Header';
import { ACCOMMODATIONS, ADDITIONAL_OPTIONS } from '../../content/wedding/accommodation';
import { Image } from '../../components/wedding/image/Image';

// styles
import '../../styles/wedding/base.scss';
import { Divider } from '../../components/wedding/divider/Divider';

const bottomMargins = { marginBottom: '1rem' };

const Accommodation = () => {
  return <div>
    <Header /> 
    <div className='content-wrapper'>
      {ACCOMMODATIONS.map(({ name, details, bookingLink, address, additionalDetails, images }, index) => (
        <div key={`accommodation-${index}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h3 style={{...bottomMargins, marginTop: index !== 0 ? '0' : undefined}}>{name}</h3>
          <div style={bottomMargins}>
            {details.map((detail, detailIndex) => <p key={`accommodation-${index}-detail-${detailIndex}`}>{detail}</p>)}
          </div>
          {additionalDetails &&
            <div style={bottomMargins}>
              {additionalDetails.map((detail, detailIndex) => <p key={`accommodation-${index}-detail-${detailIndex}`}>{detail}</p>)}
            </div>
          }
          <div style={bottomMargins}>
            <a className='custom-button'  href={bookingLink} target="_blank" rel="noreferrer">Book here</a>
          </div>
          <div style={bottomMargins}>
            {address.map((line, addressIndex) => <p key={`accommodation-${index}-address-${addressIndex}`}>{line}</p>)}
          </div>
          {images.map(({ fileName, description }, imageIndex) => (
            <Image key={`accommodation-${index}-image-${imageIndex}`} fileName={fileName} description={description} hideDescriptionText/>
          ))}
          <Divider />
        </div>
      ))}
      <h3 style={{marginTop: 0}}>Additional options nearby</h3>
      {
        ADDITIONAL_OPTIONS.map(({ name, info, link }, index) => (
          <div key={`additional-option-${index}`} style={{ marginBottom: '1rem' }}>
            {name} <a href={link} target="_blank" rel="noreferrer">({link})</a> {info}
          </div>
        ))
      }
    </div>
  </div>;
};

export default Accommodation;
