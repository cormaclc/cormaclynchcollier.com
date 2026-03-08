import { FormId } from '../../types/wedding';

const NAME_LABEL = 'Name of you and anyone else in your party';
const WELCOME_PARTY_LABEL = 'Join us for dinner, drinks, and dessert on the evening of Friday, August 28th.';
const RSVP_LABEL = 'Join us starting in the afternoon on Saturday, August 29th for the wedding ceremony and reception.';
const DIETARY_RESTRICTIONS_LABEL = 'Any dietary restrictions?';
const OTHER_COMMENTS_LABEL = 'Anything else the bride & groom should know?';

export const RSVP_OPTIONS = ['I’ll be there!', 'Can’t attend'];

export const ID_TO_DATA: Record<FormId, { label: string, name: string }> = {
  name: { label: NAME_LABEL, name: 'entry.845038701' },
  welcomeParty: { label: WELCOME_PARTY_LABEL, name: 'entry.2052144975' },
  rsvp: { label: RSVP_LABEL, name: 'entry.1851412699' },
  dietaryRestrictions: { label: DIETARY_RESTRICTIONS_LABEL, name: 'entry.1658189941' },
  otherComments: { label: OTHER_COMMENTS_LABEL, name: 'entry.1596816796' },
};

export const TITLE = 'RSVP';
export const SUBTITLE = 'Please fill out the form below to RSVP by June 1st. We can’t wait to celebrate with you!';