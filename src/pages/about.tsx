import React from 'react';
import { Bookends } from '../components/Bookends';

// styles
import '../styles/base.scss';
import './about.scss';

export default function About() {
  return <div>
    <Bookends>
      <div className='section'>
        <h3>Who am I?</h3>
        <p style={{ marginBottom: '0.5em' }}>
        I graduated from WPI in December, 2019, where I studied Computer Science. I enjoy many aspects of the field, 
        and I am particularly interested in creating applications, websites and web based services. I have internship 
        experience working at Vistaprint creating web based microservices with sleek user interfaces. I have also worked at
        Cogo Labs creating and designing websites for their portfolio companies and properties. In addition to computer science
        I obtained a minor in History. I am especially interested in the Bolshevik and French Revolution, and my culminating thesis was on the latter. In my spare time I 
        love to watch soccer, every weekend I wake up early to watch Southampton play in the English Premier League.
        </p>
        <a href="documents/LynchCollierResume.pdf" target="_blank">Click for my resume.</a>
      </div>

      <div className='section'>
        <h3>What do I study?</h3>
        <p>
          <span>WPI:</span> Class of 2020 
        </p>
        <p>
          <span>Bachelor of Science:</span> Computer Science
        </p>
        <p>
          <span>Minor:</span> History
        </p>
      </div>

      <div className='section'>
        <h3>What do I know?</h3>
        <p>
        Java, C, C++, C# Python, HTML, CSS, JavaScript <br/>
        Django REST Framework, React, Angular, .NETCore, NodeJS, JavaFX, Keras
        </p>
      </div>

      <div className='section'>
        <h3>Can you contact me?</h3>
        <p>
          <span>Email:</span> cormac.collier_at_gmail.com <br/>
          <span>LinkedIn:</span> in the footer.
        </p>
      </div>
    </Bookends>
  </div>;
}