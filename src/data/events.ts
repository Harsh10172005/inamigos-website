import { EventItem } from '@/lib/types';

export const eventsData: EventItem[] = [
  {
    id: 'evt-1',
    slug: 'pan-india-tree-plantation-monsoon-2026',
    title: 'Harit Bharat 2026: Monsoon Native Plantation Drive',
    category: 'Environment',
    date: 'October 12, 2026',
    time: '07:30 AM - 11:30 AM IST',
    location: 'Sanjay Van & Yamuna Biodiversity Park, New Delhi',
    venueType: 'In-person',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Join 400+ volunteers planting 3,000 indigenous saplings with geotagging and a 3-year care pledge.',
    fullDescription: 'Our signature annual afforestation effort aims to restore urban green lungs. Volunteers will work alongside botanical specialists planting native Indian species including Neem, Peepal, Banyan, and Jamun. Every participant receives gardening gear, organic compost guidance, and digital geotag access to monitor their adopted sapling over the coming seasons.',
    attendeesCount: 342,
    maxCapacity: 450,
    organizer: 'InAmigos Environment Wing & Prakriti Cohort',
    status: 'upcoming',
    agenda: [
      { time: '07:30 AM', activity: 'Registration, Volunteer Kit Handout & Light Breakfast' },
      { time: '08:00 AM', activity: 'Briefing by Forest Ecologist on Native Planting' },
      { time: '08:30 AM', activity: 'Plantation Sprint & Geotagging Phase' },
      { time: '11:00 AM', activity: 'Watering Systems Setup, Group Photo & Certificates' }
    ]
  },
  {
    id: 'evt-2',
    slug: 'digital-shiksha-rural-stem-workshop',
    title: 'Digital Shiksha: Interactive Science & STEM Day',
    category: 'Education',
    date: 'October 25, 2026',
    time: '10:00 AM - 02:00 PM IST',
    location: 'BachpanShala Center 4, Gurugram Outskirts',
    venueType: 'In-person',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Hands-on robotics, paper electronics, and creative mathematics fair for 200 first-generation learners.',
    fullDescription: 'An immersive carnival where children from underserved communities build DIY solar fans, simple water filter circuits, and origami geometries. College student mentors from Project Vikas will pair 1:1 with learners to spark curiosity in science and future tech careers.',
    attendeesCount: 185,
    maxCapacity: 200,
    organizer: 'BachpanShala Mentorship Team',
    status: 'upcoming',
    agenda: [
      { time: '10:00 AM', activity: 'Opening Circle & Fun Icebreakers' },
      { time: '10:45 AM', activity: 'Hands-on DIY Science Experiments' },
      { time: '12:30 PM', activity: 'Wholesome Community Lunch & Story Sharing' },
      { time: '01:30 PM', activity: 'Science Fair Showcase & Gift Distribution' }
    ]
  },
  {
    id: 'evt-3',
    slug: 'street-animal-first-aid-reflective-collaring',
    title: 'Glow for Strays: Reflective Collar & First-Aid Drive',
    category: 'Awareness',
    date: 'November 08, 2026',
    time: '08:00 PM - 11:00 PM IST',
    location: 'Connaught Place & Ring Road Periphery, Delhi NCR',
    venueType: 'In-person',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Equipping 500+ street dogs with high-visibility reflective neon collars to prevent tragic night road accidents.',
    fullDescription: 'Night-time vehicle collisions claim the lives of dozens of stray animals every week. Our volunteer squads will move across designated sectors, feeding friendly street canines, applying tick treatment sprays, and securely fitting flexible reflective collars visible from over 150 meters away.',
    attendeesCount: 96,
    maxCapacity: 120,
    organizer: 'Jeev Animal Care Taskforce',
    status: 'upcoming',
    agenda: [
      { time: '08:00 PM', activity: 'Safety Briefing & Route Allocation at Base Camp' },
      { time: '08:30 PM', activity: 'Feeding & Collaring Squads Deployment' },
      { time: '10:30 PM', activity: 'Squad Debrief, First-Aid Logs & Route Reconciliation' }
    ]
  },
  {
    id: 'evt-4',
    slug: 'udaan-women-artisan-diwali-mela',
    title: 'Udaan Hunar Haat: Handcrafted Diwali Exhibition',
    category: 'Community',
    date: 'November 15, 2026',
    time: '11:00 AM - 08:00 PM IST',
    location: 'Dilli Haat, INA, New Delhi',
    venueType: 'In-person',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Direct marketplace showcasing handmade festive diyas, handloom apparel, and organic snacks made by 80+ women artisans.',
    fullDescription: 'Witness the entrepreneurial pride of women beneficiaries of Project Udaan. All proceeds from the stalls flow 100% directly into the bank accounts of the artisan mothers and self-help groups, empowering them ahead of the festive season.',
    attendeesCount: 512,
    maxCapacity: 800,
    organizer: 'Project Udaan Women Self-Help Collectives',
    status: 'upcoming',
    agenda: [
      { time: '11:00 AM', activity: 'Exhibition Opening & Traditional Lamp Lighting' },
      { time: '01:00 PM', activity: 'Live Pottery & Embroidery Demonstrations' },
      { time: '04:00 PM', activity: 'Artisan Story Circle: Journeys to Self-Reliance' },
      { time: '07:30 PM', activity: 'Festive Cultural Performance by BachpanShala Youth' }
    ]
  },
  {
    id: 'evt-5',
    slug: 'youth-social-innovation-symposium',
    title: 'Youth Changemakers Conclave 2026',
    category: 'Youth',
    date: 'December 05, 2026',
    time: '09:30 AM - 04:30 PM IST',
    location: 'Auditorium Hall, India International Centre & Live Stream',
    venueType: 'Hybrid',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Keynote panels, fellowship pitches, and networking for 600+ university interns and development leaders.',
    fullDescription: 'A celebratory gathering of university leaders, grassroots innovators, and corporate sustainability heads. Features lightning talks from outstanding student interns who led impactful field projects under Project Vikas in 2026.',
    attendeesCount: 420,
    maxCapacity: 600,
    organizer: 'InAmigos National Youth Leadership Council',
    status: 'upcoming',
    agenda: [
      { time: '09:30 AM', activity: 'Registration & Morning Networking' },
      { time: '10:15 AM', activity: 'Keynote: Scaling Grassroots Empathy Through Tech' },
      { time: '12:00 PM', activity: 'Panel: What Modern Social Impact Demands from Gen-Z' },
      { time: '02:30 PM', activity: 'Annual Intern Excellence Awards Ceremony' }
    ]
  },
  {
    id: 'evt-6',
    slug: 'past-winter-warmth-blanket-drive-2025',
    title: 'Warmth for All: Winter Relief Drive 2025',
    category: 'Community',
    date: 'December 18, 2025',
    time: 'Completed',
    location: 'Night shelters and urban homeless settlements across Delhi NCR',
    venueType: 'In-person',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Distributed 5,400 heavy thermal blankets and dry ration packs during the peak December cold wave.',
    fullDescription: 'Our rapid relief teams covered 34 night shelters, railway outskirts, and bridge underpasses over 5 consecutive freezing nights, providing immediate thermal protection to elderly citizens and daily wage laborers.',
    attendeesCount: 220,
    maxCapacity: 220,
    organizer: 'Sewa Community Support Cell',
    status: 'past'
  }
];
