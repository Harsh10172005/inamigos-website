import { Program } from '@/lib/types';

export const programsData: Program[] = [
  {
    slug: 'bachpanshala',
    name: 'BachpanShala',
    nativeName: 'बचपन शाला',
    tagline: 'Education & Child Development for Every Child',
    category: 'Education',
    icon: 'GraduationCap',
    heroImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1600&q=80',
    description: 'Transforming underprivileged neighborhoods into thriving learning spaces through experiential learning, digital literacy, foundational numeracy, and nutrition support.',
    fullDescription: 'BachpanShala is InAmigos Foundation’s flagship early and foundational education initiative. We believe that geographical or socio-economic barriers should never limit a child’s imagination or future. Operating community learning centers, weekend remedial camps, and mobile reading libraries, BachpanShala supports first-generation learners with personalized learning kits, nutritious mid-session snacks, and interactive STEM exploration.',
    impactMetric: '18,500+ Children',
    impactSubtext: 'Enrolled in community learning centers & after-school support',
    metrics: [
      { label: 'Learning Centers', value: '42 Active' },
      { label: 'Books Distributed', value: '65,000+' },
      { label: 'School Re-enrollments', value: '4,200+' },
      { label: 'Trained Mentors', value: '380+' }
    ],
    highlights: [
      'Foundational literacy and numeracy (FLN) curriculum aligned with NEP guidelines',
      'Child-safe learning spaces with tech-enabled tablet stations and STEM toys',
      'Regular parent-teacher community dialogues on girl-child education continuity',
      'Holistic child health checkups and seasonal vitamin supplementation'
    ],
    pillars: [
      {
        title: 'Foundational Learning',
        desc: 'Interactive modules focusing on reading fluency, practical arithmetic, and creative problem solving.'
      },
      {
        title: 'Girl Child Retention',
        desc: 'Dedicated family counselling and scholastic incentives to combat early school dropout among teenage girls.'
      },
      {
        title: 'Digital Classrooms',
        desc: 'Equipping rural and semi-urban community spaces with offline-capable audio-visual learning tabs.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80'
    ],
    sdgs: ['SDG 4: Quality Education', 'SDG 5: Gender Equality', 'SDG 10: Reduced Inequalities'],
    targetBeneficiaries: 'Children aged 5–16 from underserved urban clusters and rural villages'
  },
  {
    slug: 'udaan',
    name: 'Udaan',
    nativeName: 'उड़ान',
    tagline: 'Women Empowerment, Dignity & Vocational Self-Reliance',
    category: 'Women',
    icon: 'Sparkles',
    heroImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=80',
    description: 'Empowering women with market-linked vocational training, financial literacy, micro-entrepreneurship incubation, and community leadership platforms.',
    fullDescription: 'Project Udaan fosters economic independence and self-worth among homemakers, young women, and single mothers in marginalized neighborhoods. Through multi-month certified training in tailoring, artisanal crafts, digital accounting, and organic food processing, Udaan equips women to establish sustainable home enterprises and self-help groups (SHGs).',
    impactMetric: '8,200+ Women',
    impactSubtext: 'Trained in sustainable trades & micro-business setups',
    metrics: [
      { label: 'Micro-Enterprises Started', value: '1,450+' },
      { label: 'Avg Monthly Income Boost', value: '₹6,500' },
      { label: 'SHG Collectives Formed', value: '95' },
      { label: 'Financial Literacy Grad', value: '12,000+' }
    ],
    highlights: [
      'Accredited vocational certification in apparel, crafts, and food processing',
      'Digital banking, UPI adoption, and micro-credit access mentoring',
      'Safe collective production centers equipped with sewing and finishing machinery',
      'Workshops on women legal rights, reproductive healthcare, and domestic safety'
    ],
    pillars: [
      {
        title: 'Skill Incubation',
        desc: 'Intensive hands-on craft, stitching, and digital commerce workshops with expert master trainers.'
      },
      {
        title: 'Market Linkage',
        desc: 'Connecting women artisan collectives directly to urban craft fairs, corporate gifting, and online bazaars.'
      },
      {
        title: 'Leadership & Wellness',
        desc: 'Peer mentorship circles promoting leadership, mental wellbeing, and health advocacy.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80'
    ],
    sdgs: ['SDG 5: Gender Equality', 'SDG 8: Decent Work & Economic Growth', 'SDG 1: No Poverty'],
    targetBeneficiaries: 'Women and young girls from economically vulnerable households seeking financial independence'
  },
  {
    slug: 'jeev',
    name: 'Jeev',
    nativeName: 'जीव',
    tagline: 'Compassion, Rescue & Healthcare for Stray Animals',
    category: 'Animals',
    icon: 'HeartHandshake',
    heroImage: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1600&q=80',
    description: 'Providing daily feeding drives, emergency medical rescues, reflective safety collars, and anti-rabies vaccination drives for stray community animals.',
    fullDescription: 'Jeev translates empathy into daily action for voiceless street animals. India’s streets are home to millions of stray canines and felines vulnerable to road accidents, dehydration, hunger, and infectious diseases. Our volunteer network coordinates community feeding stations, distributes reflective collars to prevent night collisions, sponsors sterilization drives, and responds to medical emergencies.',
    impactMetric: '22,000+ Animals',
    impactSubtext: 'Fed, treated, vaccinated or rescued across cities',
    metrics: [
      { label: 'Meals Served Monthly', value: '45,000+' },
      { label: 'Reflective Collars Put', value: '6,800+' },
      { label: 'Emergency Rescues', value: '3,100+' },
      { label: 'Vaccination Drives', value: '140+' }
    ],
    highlights: [
      'Dedicated volunteer feeding grid covering 28 urban clusters every evening',
      'Reflective neon glow collars to avert hit-and-run accidents on dark highways',
      'First-aid first responder kits distributed to local community animal feeders',
      'Adoption drives championing indie puppies and injured animals'
    ],
    pillars: [
      {
        title: 'Nutrition & Daily Feeding',
        desc: 'Ensuring balanced, nutritious dog and cat food feeds in designated neighborhood zones.'
      },
      {
        title: 'Road Safety & Protection',
        desc: 'Fitting life-saving glow collars and advocating for cautious driving in residential animal corridors.'
      },
      {
        title: 'Rescue & Medical Rehab',
        desc: 'Partnering with local veterinary clinics for trauma care, maggot wound treatment, and spay/neuter.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80'
    ],
    sdgs: ['SDG 15: Life on Land', 'SDG 3: Good Health & Well-being', 'SDG 11: Sustainable Cities'],
    targetBeneficiaries: 'Stray dogs, cats, working equines, and urban wildlife in need of humane care'
  },
  {
    slug: 'sewa',
    name: 'Sewa',
    nativeName: 'सेवा',
    tagline: 'Rapid Community Relief & Essential Dignity Support',
    category: 'Community',
    icon: 'Users',
    heroImage: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1600&q=80',
    description: 'Delivering urgent disaster relief, seasonal blanket drives, dry ration kits, water sanitation solutions, and senior citizen aid.',
    fullDescription: 'Sewa is the human-centric emergency relief and humanitarian pillar of InAmigos Foundation. From monsoon floods and extreme winter waves to localized distress, Sewa mobilizes rapid response volunteer corps within 24 hours to provide dignity kits, safe drinking water, dry rations, and temporary shelter supplies.',
    impactMetric: '50,000+ Lives',
    impactSubtext: 'Directly supported through humanitarian relief & aid drives',
    metrics: [
      { label: 'Ration Kits Distributed', value: '32,000+' },
      { label: 'Winter Blankets Donated', value: '18,500+' },
      { label: 'Disaster Relief Camps', value: '64' },
      { label: 'Community Kitchen Days', value: '450+' }
    ],
    highlights: [
      'Rapid mobilization logistics network capable of reaching remote hamlets',
      'Annual "Warmth for All" winter drive distributing thermal blankets across North India',
      'Nutritious grocery relief kits tailored for vulnerable families and daily wage earners',
      'Hygiene and clean drinking water filtration systems installed in vulnerable wards'
    ],
    pillars: [
      {
        title: 'Emergency Aid',
        desc: 'Immediate on-ground response during natural disasters, harsh climatic events, and sudden distress.'
      },
      {
        title: 'Nutritional Security',
        desc: 'Wholesome grocery kits providing pulse, grains, cooking oil, and immunity essentials.'
      },
      {
        title: 'Elder & Vulnerable Care',
        desc: 'Assistance programs for destitute senior citizens and persons with disabilities.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80'
    ],
    sdgs: ['SDG 1: No Poverty', 'SDG 2: Zero Hunger', 'SDG 6: Clean Water & Sanitation'],
    targetBeneficiaries: 'Underprivileged families, homeless individuals, disaster-affected communities, and seniors'
  },
  {
    slug: 'prakriti',
    name: 'Prakriti',
    nativeName: 'प्रकृति',
    tagline: 'Ecological Restoration, Urban Forests & Green Clean Drives',
    category: 'Environment',
    icon: 'Trees',
    heroImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80',
    description: 'Revitalizing green cover with native tree plantations, lake cleanups, zero-plastic awareness, and youth climate stewardship campaigns.',
    fullDescription: 'Prakriti champions environmental sustainability through community-driven mass sapling plantations, urban Miyawaki micro-forests, waterbody cleanups, and school eco-clubs. We believe that caring for our planet begins in our own neighborhoods, transforming dry commons into self-sustaining oxygen reservoirs.',
    impactMetric: '20,000+ Trees',
    impactSubtext: 'Planted with 85%+ survival monitoring and community care',
    metrics: [
      { label: 'Trees Planted', value: '20,000+' },
      { label: 'Cleanup Drives', value: '85+' },
      { label: 'Waste Diverted', value: '42 Tons' },
      { label: 'Green Eco-Schools', value: '55' }
    ],
    highlights: [
      'Focus on native, drought-resistant tree species (Neem, Peepal, Banyan, Jamun)',
      'Community geotagging and 3-year geo-tracked sapling maintenance pledge',
      'Neighborhood plogging (jogging + picking up plastic waste) Sunday routines',
      'Composting and seed ball making workshops for school children and youth'
    ],
    pillars: [
      {
        title: 'Native Afforestation',
        desc: 'Restoring local biodiversity through science-backed plantation of indigenous flora.'
      },
      {
        title: 'Waterbody Rejuvenation',
        desc: 'Mobilizing citizen volunteers to clear plastic and weeds from community ponds and riverbanks.'
      },
      {
        title: 'Climate Literacy',
        desc: 'Interactive eco-workshops educating the next generation on carbon footprints and conservation.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80'
    ],
    sdgs: ['SDG 13: Climate Action', 'SDG 15: Life on Land', 'SDG 11: Sustainable Cities'],
    targetBeneficiaries: 'Local ecosystems, urban neighborhoods, school youth, and future generations'
  },
  {
    slug: 'vikas',
    name: 'Vikas',
    nativeName: 'विकास',
    tagline: 'Youth Leadership, Social Internships & Skill Development',
    category: 'Youth',
    icon: 'TrendingUp',
    heroImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80',
    description: 'Transforming college students and young professionals into ethical changemakers through immersive on-ground social internships and fellowships.',
    fullDescription: 'Project Vikas is the youth engine powering InAmigos Foundation. Having trained more than 30,000 interns and campus ambassadors across India, Vikas equips students with critical workplace skills—project management, grassroots research, digital communications, and empathy-driven leadership—while channeling youthful energy into solving real social problems.',
    impactMetric: '30,000+ Interns',
    impactSubtext: 'Trained and certified through structured social internships',
    metrics: [
      { label: 'Campus Partners', value: '180+' },
      { label: 'Intern Hours Logged', value: '450,000+' },
      { label: 'Project Leadership Alum', value: '2,800+' },
      { label: 'Placement Recommendations', value: '94%' }
    ],
    highlights: [
      'Structured 4 to 8-week experiential internships in social marketing, HR, and field ops',
      'One-on-one mentorship from experienced development professionals and industry leaders',
      'Official verified certificates of completion, letters of recommendation, and awards',
      'Pan-India student chapters hosting localized youth social innovation summits'
    ],
    pillars: [
      {
        title: 'Experiential Learning',
        desc: 'Bridging the college-to-career gap with real-world social impact projects and deliverables.'
      },
      {
        title: 'Grassroots Fellowship',
        desc: 'Selected fellows lead field initiatives in rural education, environmental care, and animal rescue.'
      },
      {
        title: 'Professional Mentorship',
        desc: 'Masterclasses on public speaking, problem-solving, data analysis, and ethical leadership.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80'
    ],
    sdgs: ['SDG 8: Decent Work & Economic Growth', 'SDG 4: Quality Education', 'SDG 17: Partnerships for the Goals'],
    targetBeneficiaries: 'Undergraduate, postgraduate students, and early-career youth across India'
  }
];
