import type { AccommodationSpec } from '../../types/wedding/accommodation.types';

const AWOL: AccommodationSpec = {
  name: 'AWOL Stowe',
  details: ['Stay at the ceremony location with us!',  'Book both Friday and Saturday night and get Friday night on us!*'],
  bookingLink: 'https://app.mews.com/distributor/1b454b71-6ea3-43e4-83a4-b27a01047026?mewsAvailabilityBlockId=6ac1ac7d-dcf0-4fc5-bf5b-b3590138feee&mewsStart=2026-08-28&mewsEnd=2026-08-30',
  address: [
    '691 Mountain Rd',
    'Stowe, VT 05672',
  ],
  additionalDetails: '*Note: when you book both nights, the website will show the discount as half off each night.',
  images: [{ fileName: 'accommodation/AWOL_1.JPG', description: 'AWOL Stowe 1' }, { fileName: 'accommodation/AWOL_2.JPG', description: 'AWOL Stowe 2' }],
};

const CADY_HILL: AccommodationSpec = {
  name: 'Cady Hill Lodge',
  details: ['Cady Hill is nextdoor to AWOL.'],
  bookingLink: 'https://app.mews.com/distributor/edc92dd9-d4b6-438c-8ed9-b27a01128a42?mewsAvailabilityBlockId=ec49694d-74b1-43c7-8cde-b3ec0107ddbf&mewsStart=2026-08-28&mewsEnd=2026-08-30',
  address: [
    '511 Mountain Rd',
    'Stowe, VT 05672',
  ],
  images: [{ fileName: 'accommodation/CADY_HILL_1.JPG', description: 'Cady Hill Lodge 1' }, { fileName: 'accommodation/CADY_HILL_2.JPG', description: 'Cady Hill Lodge 2' }],
};

export const ACCOMMODATIONS: AccommodationSpec[] = [AWOL, CADY_HILL];