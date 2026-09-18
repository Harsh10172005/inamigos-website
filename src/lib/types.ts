export type ProgramCategory = 
  | 'All'
  | 'Education'
  | 'Women'
  | 'Environment'
  | 'Animals'
  | 'Community'
  | 'Youth';

export interface Program {
  slug: string;
  name: string;
  nativeName?: string;
  tagline: string;
  category: ProgramCategory;
  icon: string;
  heroImage: string;
  description: string;
  fullDescription: string;
  impactMetric: string;
  impactSubtext: string;
  metrics: Array<{ label: string; value: string }>;
  highlights: string[];
  pillars: Array<{ title: string; desc: string }>;
  gallery: string[];
  sdgs: string[];
  targetBeneficiaries: string;
}

export type EventCategory = 
  | 'All'
  | 'Community'
  | 'Education'
  | 'Environment'
  | 'Awareness'
  | 'Youth';

export interface EventItem {
  id: string;
  title: string;
  slug: string;
  category: EventCategory;
  date: string;
  time: string;
  location: string;
  venueType: 'In-person' | 'Hybrid' | 'Virtual';
  image: string;
  excerpt: string;
  fullDescription: string;
  attendeesCount: number;
  maxCapacity: number;
  organizer: string;
  status: 'upcoming' | 'past';
  agenda?: Array<{ time: string; activity: string }>;
}

export interface StoryItem {
  slug: string;
  title: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  featuredImage: string;
  challenge: string;
  action: string;
  outcome: string;
  quote: string;
  quoteAuthor: string;
  statistics: Array<{ label: string; value: string }>;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  category: 'Volunteer' | 'Community' | 'Partner';
  quote: string;
  avatar: string;
  location: string;
  rating?: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Events' | 'Education' | 'Environment' | 'Volunteers' | 'Community';
  image: string;
  caption: string;
  date: string;
  location: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'Leadership' | 'Core' | 'Advisors';
  bio: string;
  image: string;
  location: string;
}

export interface VolunteerApplication {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  areaOfInterest: string;
  availability: string;
  skills: string;
  statement: string;
  submittedAt: string;
}

export interface DonationRecord {
  referenceNumber: string;
  razorpayPaymentId?: string;
  razorpayOrderId?: string;
  amount: number;
  frequency: 'one-time' | 'monthly';
  purpose: string;
  donorName: string;
  email: string;
  phone?: string;
  message?: string;
  timestamp: string;
  paymentMethod: string;
  status: 'SUCCESS';
}
