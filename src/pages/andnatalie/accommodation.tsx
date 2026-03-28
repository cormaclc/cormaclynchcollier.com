import React from 'react';
import { Header } from '../../components/wedding/header/Header';
import { ACCOMMODATIONS } from '../../content/wedding/accommodation';

// styles
import '../../styles/wedding/base.scss';
import { Divider } from '../../components/wedding/divider/Divider';
import { Image } from '../../components/wedding/image/Image';

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
          <div style={bottomMargins}>
            <a className='custom-button'  href={bookingLink} target="_blank" rel="noreferrer">Book here</a>
          </div>
          {additionalDetails && <p style={bottomMargins}>{additionalDetails}</p>}
          <div style={bottomMargins}>
            {address.map((line, addressIndex) => <p key={`accommodation-${index}-address-${addressIndex}`}>{line}</p>)}
          </div>
          {images.map(({ fileName, description }, imageIndex) => (
            <Image key={`accommodation-${index}-image-${imageIndex}`} fileName={fileName} description={description} hideDescriptionText/>
          ))}
          {index !== ACCOMMODATIONS.length - 1 && <Divider />}
        </div>
      ))}
    </div>
  </div>;
};

export default Accommodation;
