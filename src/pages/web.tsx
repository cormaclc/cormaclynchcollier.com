import React from 'react';
import { Bookends } from '../components/Bookends';
import { WEB_PROJECTS } from '../content/web';

// styles
import '../styles/base.scss';

const Web = () => {
  return (
    <Bookends>
      {WEB_PROJECTS.map((project) => (
        <div key={project.title} className='section-spacing'>
          <h3>{project.title}{' '}<span>{project.date}</span></h3>
          <p>
            {project.description}
            {project.links.map((link) => (
              <span key={link.href}>
                {' '}
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.text}
                </a>
              </span>
            ))}
          </p>
        </div>
      ))}
    </Bookends>
  );
};

export default Web;