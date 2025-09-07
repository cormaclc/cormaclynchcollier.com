import type { Project } from '../types';

export const ENGINEER_PROJECTS: Project[] = [
  {
    title: 'Correlating Muscle Movements with Ultrasound Images',
    date: '2019',
    description: 'Created a machine learning model to predict finger movements when provided with an ultrasound image of the forearm. I created and tested different neural networks (changes in both design and specific properties) in order to find the optimal configuration that would produce the most accurate results. In terms of technologies, I used Keras and Tensorflow to develop my neural networks. This was my final project at WPI, and thus was required to write a final paper detailing my process (as well as the final code). ',
    links: [{
      text: 'View the final paper.', href: '/documents/MQPFinalPaper.pdf'
    }]
  },
  {
    title: 'Software Engineering',
    date: '2018',
    description: 'Worked in a group to create a pathfinding application for Brigham and Women\'s Hospital (in the WPI Sofware Engineering class). I was the lead UI designer on the team and was responsible for deciding what our application should look like and for implementing those designs in Java.',
    links: [{
      text: 'Read about the class.', href: 'https://www.wpi.edu/academics/calendar-courses/course-descriptions/computer-science#cs_3733'
    }]
  },
  {
    title: 'Polibook3D',
    date: '2019',
    description: 'Built a WebGL program to read .ply files and render those points with lines to create a three dimensional object (in the WPI class Computer Graphics). There are other features such as translation, rotation and pulsing.',
    links: [{
      text: 'View source code.',
      href: 'https://github.com/cormaccollier/polibook3D-webgl'
    }]
  },
  {
    title: 'Polibook2D',
    date: '2019',
    description: 'Built a WebGL program to read .dat files and render those points with lines to the screen to create an object (in the WPI class Computer Graphics). User can toggle to draw mode so they can draw their own points on the screen with connecting lines.',
    links: [{
      text: 'View source code.',
      href: 'https://github.com/cormaccollier/polibook2D-webgl'
    }],
  },
  {
    title: 'Design for Others',
    date: '2018',
    description: 'Worked in a group to redesign the Worcester Public Library website for a specific demographic (in the WPI Human Computer Interaction class).',
    links: [{
      text: 'Read about it.',
      href: 'https://medium.com/@cormac.collier/design-for-feedback-c212af828ccc'
    }],
  },
  {
    title: 'Design for Another World',
    date: '2018',
    description: 'Worked in a group to create a Virtual Reality application (in the WPI Human Computer Interaction class). We chose to create a travel application that would expose users to new places with images and sounds.',
    links: [{
      text: 'Try it out.',
      href: 'https://travel-the-world.glitch.me/'
    }, {
      text: 'Read about it.',
      href: 'https://medium.com/design-for-another-worldgroup-3/design-for-another-world-c2c25441c15e'
    }],
  },
  {
    title: 'Design for Understanding',
    date: '2018',
    description: 'Worked in a group to create an application that would display data about music (in the WPI Human Computer Interaction class). We found a data set and displayed songs based on where they were produced, where artists were from, and songs per artist for a particularly state.',
    links: [{
      text: 'Try it out.',
      href: 'https://musicdatavis.github.io/index.html'
    }, {
      text: 'Read about it.',
      href: 'https://medium.com/@matticoli/visualizing-the-corgis-music-dataset-36f02bdd51bc'
    }],
  }
];