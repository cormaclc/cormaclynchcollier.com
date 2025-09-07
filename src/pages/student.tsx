import React from 'react';
import { Bookends } from '../components/Bookends';
import { STUDENT_PROJECTS } from '../content/student';

// styles
import '../styles/base.scss';
import Link from 'next/link';

const Student = () => {
  return (
    <Bookends>
      <div className='section-spacing'>
        <h3>My studies</h3>
        <p>
          <span>WPI:</span> Class of 2020 <br/>
          <span>Bachelor of Science:</span> Computer Science <br/>
          <span>Minor:</span> History
        </p>
      </div>
      <div className='section-spacing'>
        <h3>Click to learn about my CS work</h3>
        <p>
          <Link href="../web">web design.</Link> <br/>
          <Link href="../engineer">software engineering.</Link>
        </p>
      </div>
      {STUDENT_PROJECTS.map((project) => (
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

export default Student;