import React from 'react';
import { Header } from '../../components/wedding/header/Header';
import { ScheduleContent } from '../../components/wedding/schedule/ScheduleContent';

// styles
import '../../styles/wedding/base.scss';

const Schedule = () => {
  return <div>
    <Header />
    <div className='content-wrapper'>
      <h3>Schedule</h3>
      <ScheduleContent />
    </div>
  </div>;
};

export default Schedule;