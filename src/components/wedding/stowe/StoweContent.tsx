import React from 'react';
import { IMAGES, STOWE_CONTENT } from '../../../content/wedding/stowe';
import { Divider } from '../divider/Divider';

// styles
import '../../../styles/wedding/base.scss';
import './StoweContent.scss';
import { Image } from '../image/Image';

export const StoweContent = () => {
  return (
    <>
      {STOWE_CONTENT.map((section, sectionIndex) => (
        <>
          <div>
            <h4 key={section.header} className={sectionIndex === 0 ? '' : 'no-top-margin'}>{section.header}</h4>
            <div>
              {section.content.map((item, contentIndex) => (
                <p key={item} className={contentIndex < section.content.length - 1 ? 'text-bottom-margin': ''}>{item}</p>
              ))}
            </div>
          </div>
          {sectionIndex < STOWE_CONTENT.length - 1 && <Divider />}
        </>
      ))}
      {IMAGES.map(({ fileName, description }, imageIndex) => (
        <Image key={`stowe-image-${imageIndex}`} fileName={fileName} description={description} />
      ))}
    </>);
};