// ─── Villa Data ────────────────────────────────────────────────

export const villaData = {
  name: 'Sea La Vie',
  location: 'Alibaug, Maharashtra',
  brand: 'X SERIES',
  rating: 4.5,
  reviewCount: 105,
  priceOriginal: 149086,
  priceDiscounted: 100086,
  type: 'Entire Villa',
  guests: '6–12 Guests',
  bedrooms: '8 Bedrooms',
  tags: ['Pet-Friendly'],
  about: [
    'Tucked away cosily in the lap of nature, this is the perfect destination getaway for a vacation trip near Delhi and Chandigarh.',
    'The tourist-favourite Bhimtal Lake is only a stone\'s throw away.',
  ],
  coordinates: { lat: 18.7495, lng: 72.8776 },
  mapsCoordText: "18°44'58.3\"N 72°52'42.7\"E",
};

// ─── Amenities ────────────────────────────────────────────────

export const amenities = [
  { icon: 'bed',      label: '4 Bedrooms' },
  { icon: 'guests',   label: '12 Guests' },
  { icon: 'parking',  label: 'Free parking' },
  { icon: 'ac',       label: 'Air conditioning' },
  { icon: 'bath',     label: '4 Bedrooms' },
  { icon: 'wifi',     label: '12 Guests' },
];

// ─── Tab content ─────────────────────────────────────────────

export const tabs = [
  { id: 'house-rules',        label: 'House Rules' },
  { id: 'cancellation',       label: 'Cancellation Policy' },
  { id: 'need-to-know',       label: 'Things you need to know' },
  { id: 'things-to-do',       label: 'Things to do' },
];

export const tabContent: Record<string, string> = {
  'house-rules':
    'No smoking inside the villa. No loud music after 10 PM. Pets allowed with prior intimation. No outside guests without prior approval. Please keep the property clean and tidy during your stay.',
  'cancellation':
    'Cancellations made 30+ days before check-in receive a full refund. Cancellations within 15–30 days receive 50% refund. No refund for cancellations within 15 days of check-in.',
  'need-to-know':
    'The villa is located in a gated community. Check-in is at 2 PM and check-out is at 11 AM. A caretaker is available on-site 24/7. The nearest hospital is 8 km away.',
  'things-to-do':
    'Visit Bhimtal Lake (2 km), explore Alibaug beach (5 km), go on a nature walk in the nearby forest trail, or rent bicycles from the village. Water sports available nearby.',
};

// ─── Real Moments (user photos) ──────────────────────────────

export const realMoments = [
  { user: 'Vinay', date: 'Sep 03, 2023', image: '/images/moment-1.jpg' },
  { user: 'Vinay', date: 'Sep 03, 2023', image: '/images/moment-2.jpg' },
  { user: 'Vinay', date: 'Sep 03, 2023', image: '/images/moment-3.jpg' },
];

// ─── Rooms & Beds ────────────────────────────────────────────

export const rooms = [
  {
    name: 'Master Suite',
    image: '/images/room-1.jpg',
    bullets: [
      'Tucked away cosily in the lap of nature, this is the perfect destination getaway.',
      'The tourist-favourite Bhimtal Lake is only a stone\'s throw away.',
    ],
  },
  {
    name: 'Garden Room',
    image: '/images/room-2.jpg',
    bullets: [
      'Tucked away cosily in the lap of nature, this is the perfect destination getaway.',
      'The tourist-favourite Bhimtal Lake is only a stone\'s throw away.',
    ],
  },
  {
    name: 'Pool-facing Room',
    image: '/images/room-3.jpg',
    bullets: [
      'Tucked away cosily in the lap of nature, this is the perfect destination getaway.',
      'The tourist-favourite Bhimtal Lake is only a stone\'s throw away.',
    ],
  },
];

// ─── Footer links ────────────────────────────────────────────

export const footerColumns = [
  {
    heading: 'Company',
    links: ['SaffronStays', 'Signature', 'XSeries', 'About'],
  },
  {
    heading: 'Company',
    links: ['SaffronStays', 'Signature', 'XSeries', 'About'],
  },
  {
    heading: 'Contact',
    links: ['mail@saffronstays.com', '+91 3728253727', 'Contact us', 'Contact to Partner'],
  },
  {
    heading: 'Partner with us',
    links: ['List a home'],
  },
  {
    heading: 'Policies',
    links: ['Privacy Policy', 'Terms', 'Sitemap', 'Cancellation Policy'],
  },
];
