import type { ImageSpec } from './image.types';

export interface AccommodationSpec {
  name: string;
  details: string[];
  bookingLink: string;
  address: string[];
  additionalDetails?: string[];
  images: ImageSpec[];
}