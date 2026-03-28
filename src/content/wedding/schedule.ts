export const TITLE = 'Schedule';

const NIGHT_BEFORE_SCHEDULE: { time: string, description: string }[] = [
  { time: '6 pm', description: 'Welcome dinner at AWOL Hotel' },
];

const WEDDING_DAY_SCHEDULE: { time: string, description: string }[] = [
  // todo: finalize where the hike will be and update description
  { time: '8:30 am', description: 'Morning hike at ... (optional)' },
  { time: '4 pm', description: 'Ceremony at AWOL Hotel' },
  { time: '5 pm', description: 'Cocktail hour and dinner at Stowe Cider' },
  // todo: is this the right time?
  { time: '10 pm', description: 'After party at AWOL Hotel' }, 
];

export const SCHEDULE: { date: string, heading: string, items: { time: string, description: string }[] }[] = [
  { date: '8/28', heading: 'The Night Before', items: NIGHT_BEFORE_SCHEDULE },
  { date: '8/29', heading: 'The Wedding Day', items: WEDDING_DAY_SCHEDULE },
];