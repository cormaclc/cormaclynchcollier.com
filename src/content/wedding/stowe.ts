const THINGS_TO_DO_HEADER = 'Our favorite things to do';
const THINGS_TO_DO: string[] = [
  'Get a cider donut from Cold Hollow Cider Mill',
  'Ride the Stowe Gondola',
  'Visit the von Trapp Family Lodge',
  'Rent bikes to ride along the Stowe Recreation Path',
  'Shop in Stowe center',
  'Tour the Ben and Jerry’s factory'
];

const FAVORITE_RESTAURANTS_HEADER = 'Our favorite restaurants';
const FAVORITE_RESTAURANTS: string[] = [
  'Doc Ponds',
  'Ideltyme',
  'Butler’s pantry',
  'American Flatbread',
  'The Bench'
];

const FAVORITE_DRINK_SPOTS_HEADER = 'Our favorite drink spots';
const FAVORITE_DRINK_SPOTS: string[] = [
  'Vermont Artisan Coffee & Tea',
  'Black Cap Coffee & Bakery',
  'The Alchemist Brewery',
  'Apres Only Bar',
  'Stowe Public House',
  'Cork Wine Bar'
];

const FAVORITE_WALKS_HEADER = 'Our favorite walks';
const FAVORITE_WALKS: string[] = [
  'Stowe Recreation Path',
  'Cady Hill Forest'
];

const FAVORITE_HIKES_HEADER = 'Our favorite hikes';
const FAVORITE_HIKES: string[] = [
  'Stowe Pinnacle',
  'Mt. Mansfield',
  'Bingham Falls',
  'Moss Glen Falls',
  'Sterling Falls',
];

export const STOWE_CONTENT: { header: string; content: string[] }[] = [
  {
    header: THINGS_TO_DO_HEADER,
    content: THINGS_TO_DO
  },
  {
    header: FAVORITE_RESTAURANTS_HEADER,
    content: FAVORITE_RESTAURANTS
  },
  {
    header: FAVORITE_DRINK_SPOTS_HEADER,
    content: FAVORITE_DRINK_SPOTS
  },
  {
    header: FAVORITE_WALKS_HEADER,
    content: FAVORITE_WALKS
  },
  {
    header: FAVORITE_HIKES_HEADER,
    content: FAVORITE_HIKES
  }
];

export const IMAGES = [
  { fileName: 'BEN_JERRYS.jpg', description: '2024 - Ben & Jerry\'s' }
];