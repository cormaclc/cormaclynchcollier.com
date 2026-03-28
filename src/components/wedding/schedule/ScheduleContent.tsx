import React from 'react';
import { SCHEDULE } from '../../../content/wedding/schedule';

// styles
import '../../../styles/wedding/base.scss';
import './ScheduleContent.scss';

export const ScheduleContent = () => {
  // keep a global counter so alternation continues across groups
  let globalIdx = 0;

  return (
    <div className='schedule-groups'>
      {SCHEDULE.map((group) => (
        <div className='timeline-group' key={`group-${group.date}`}>
          <div className='timeline-day-header'>
            <span className='timeline-day-text'>
              {group.date} — {group.heading}
            </span>
          </div>

          <div className='timeline'>
            {group.items.map((item) => {
              const side = globalIdx % 2 === 0 ? 'left' : 'right';
              const el = (
                <div key={`timeline-${group.date}-${globalIdx}`} className={`timeline-item ${side}`}>
                  <div className='timeline-content'>
                    <div className='timeline-meta'>
                      <span className='timeline-time'>{item.time}</span>
                    </div>
                    <div className='timeline-desc'>{item.description}</div>
                  </div>
                </div>
              );
              globalIdx += 1;
              return el;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
