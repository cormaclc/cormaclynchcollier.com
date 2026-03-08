import type { AccommodationSpec } from '../../types/wedding/accommodation.types';

const AWOL: AccommodationSpec = {
  name: 'AWOL Stowe',
  details: ['Stay at the ceremony location with us!',  'Book both Friday and Saturday night and get Friday night on us!*'],
  bookingLink: 'https://www.awolstowe.com/', // TODO: real link...
  address: [
    '691 Mountain Rd',
    'Stowe, VT 05672',
  ],
  additionalDetails: '*Note: when you book both nights, the website will show the discount as half off each night.',
  imagesPaths: []
};

const CADY_HILL: AccommodationSpec = {
  name: 'Cady Hill Lodge',
  details: ['Cady Hill is nextdoor to AWOL.'],
  bookingLink: 'https://www.cadyhill.com/', // TODO: real link...
  address: [
    '511 Mountain Rd',
    'Stowe, VT 05672',
  ],
  imagesPaths: []
};

export const ACCOMMODATIONS: AccommodationSpec[] = [AWOL, CADY_HILL];