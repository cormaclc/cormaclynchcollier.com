import type { Project } from '../types';

export const STUDENT_PROJECTS: Project[] = [
  {
    title: 'Major Qualifying Project (MQP)',
    date: '2019',
    description: 'For WPI\'s MQP final project I created a machine learning model to predict finger movements when provided with an ultrasound image of the forearm. I created and tested different neural networks (changes in both design and specific properties) in order to find the optimal configuration that would produce the most accurate results. I worked with a professor to develop the technology as well as write a paper detailing the process.',
    links: [
      {
        text: 'View the final paper.',
        href: '/documents/MQPFinalPaper.pdf'
      }
    ],
  },
  {
    title: 'Interactive Qualifying Project (IQP)',
    date: '2019',
    description: 'For WPI\'s IQP junior-year project, I went to London for 7 weeks and worked with the British Museum and their International Training Programme to develop a website to house their online exhibitions. The website, developed with  wordpress, was created with attention good website design and accompanied by readable documentation so that non-technical users could continue the website in the future.',
    links: [
      {
        text: 'Read about the project.',
        href: 'https://web.wpi.edu/Pubs/E-project/Available/E-project-042519-104024/unrestricted/lo19-bm-finalpaper.pdf'
      },
      {
        text: 'View the exhibition.',
        href: 'http://itponlineexhibitions.org/'
      }
    ]
  },
  {
    title: 'History Minor Thesis',
    date: '2019',
    description: 'This paper details the relationship between the French Revolution and the clergy. To do this, it first takes a look at what the relationship was like between the people and the church leading up to the revolution. Next it analyzes the changes that were implemented during the revolution, including the treatment of the clergy (how that evolved over the period in question), and how both sides responded to the changes. Lastly the paper looks at the immediate post-revolution religion and the legacy of religion as a result of the revolution.',
    links: [
      {
        text: 'Read it here.',
        href: '/documents/HistoryThesisLynchCollier.pdf'
      }
    ]
  },
  {
    title: 'Humanities Requirement Culminating Paper',
    date: '2018',
    description: 'This paper conducts an analysis of why Russian Jewish emigrants left their homes in such large numbers from 1881 to 1917. It argues that the reason they left was the culmination of internal Russian conditions: pogroms and anti-Jewish legislation. In addition to these factors the United States Jewish population eased resettlement of Russian Jews, providing another reason to leave. The argument is presented by first overviewing the history of Russian Jews, looking at quantitative statistics of their emigration, and lastly discussing pogroms and legislation that was put in place over the 16 year period.',
    links: [
      {
        text: 'Read it here.',
        href: '/documents/LynchCollier_HistoryPaper.pdf'
      }
    ]
  }
];