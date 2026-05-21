/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioItem, ServiceItem } from './types';

export const freelancerName = "Xurzkwt";
export const freelancerTitle = "Fashion & Editorial Photographer";

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'work-1',
    title: 'SILHOUETTE NOIRE',
    category: 'Editorial',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800',
    aspectRatio: 'portrait',
    dimensions: '35mm Monochromatic',
    year: '2025'
  },
  {
    id: 'work-2',
    title: 'BRUTALIST SYMMETRY',
    category: 'Architecture',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    aspectRatio: 'landscape',
    dimensions: 'Medium Format Digital',
    year: '2025'
  },
  {
    id: 'work-3',
    title: 'THE DRAPED FORM',
    category: 'Fashion',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    aspectRatio: 'portrait',
    dimensions: '120mm Film',
    year: '2026'
  },
  {
    id: 'work-4',
    title: 'CHIAROSCURO STUDY',
    category: 'Portraiture',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    aspectRatio: 'portrait',
    dimensions: 'Polaroid Single Print',
    year: '2026'
  },
  {
    id: 'work-5',
    title: 'REFLECTIVE LINES',
    category: 'Minimalism',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    aspectRatio: 'landscape',
    dimensions: 'Digital Hasselblad',
    year: '2025'
  },
  {
    id: 'work-6',
    title: 'TEXTURES OF CRETE',
    category: 'Editorial',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800',
    aspectRatio: 'portrait',
    dimensions: '35mm Portra',
    year: '2026'
  },
  {
    id: 'work-7',
    title: 'STARK FOCUS',
    category: 'Portraiture',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
    aspectRatio: 'portrait',
    dimensions: '120mm Film Noir',
    year: '2025'
  },
  {
    id: 'work-8',
    title: 'SHADOW DIALOGUE',
    category: 'Fine Art',
    imageUrl: 'https://images.unsplash.com/photo-1505673542670-a5e3ff5b14a3?auto=format&fit=crop&q=80&w=800',
    aspectRatio: 'square',
    dimensions: 'Negative Exposure',
    year: '2026'
  },
  {
    id: 'work-9',
    title: 'GEOMETRIC VECTS',
    category: 'Minimalism',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
    aspectRatio: 'portrait',
    dimensions: 'Phase One 100MP',
    year: '2025'
  }
];

export const services: ServiceItem[] = [
  {
    id: 'service-1',
    title: 'Portrait Session',
    price: '$850+',
    duration: '2 Hours',
    description: 'An intimate, highly focused daylight studio session exploring human geography, soft tones, and character design.',
    deliverables: [
      'Pre-session styling & concept consultation',
      '2 hours of shooting time in high-ceiling daylight studio',
      '15 hand-retouched medium-format digital prints',
      'Full private online index of raw proofs'
    ]
  },
  {
    id: 'service-2',
    title: 'Campaign Editorial',
    price: '$2,400+',
    duration: 'Full Day',
    description: 'High-concept visual storytelling for modern brands, couture designers, and artisanal lookbooks. Fully art-directed.',
    deliverables: [
      'Comprehensive moodboard & conceptual art direction',
      'Location curation, scouting, & permit administration',
      'Full day of styling-led photography',
      '40 meticulously color-graded & retouched high-res deliverables'
    ]
  },
  {
    id: 'service-3',
    title: 'Creative Direction Consultation',
    price: '$350/hr',
    duration: 'As Needed',
    description: 'Strategic planning, visual asset mapping, and styling architecture for magazines, digital agencies, or individual creatives.',
    deliverables: [
      '1-on-1 focus dialogue (Virtual or Prague studio)',
      'Brand aesthetic assessment and asset matrix',
      'Bespoke digital styleboard & typography pairings guide',
      'Post-consultation resource list & industry connections'
    ]
  },
  {
    id: 'service-4',
    title: 'Fine Art Archival Print',
    price: '$450',
    duration: 'Standard Shipment',
    description: 'Museum-grade Giclée prints from current monochromatic exhibitions, numbered, hand-signed, and mounted on archival-grade frames.',
    deliverables: [
      'Sized at 16x20 inches, framed professionally',
      'Printed on heavy acid-free Hahnemühle Cotton Rag paper',
      'Individually numbered certificate of authentication',
      'Safe, insured wooden-crate delivery'
    ]
  }
];
