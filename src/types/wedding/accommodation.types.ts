export interface AccommodationSpec {
  name: string;
  details: string[];
  bookingLink: string;
  address: string[];
  additionalDetails?: string;
  imagesPaths: string[];
}