export interface ImpactStat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  subtext: string;
  icon: string;
}

export const impactMetrics: ImpactStat[] = [
  {
    id: 'stat-lives',
    label: 'Lives Impacted',
    value: 50000,
    suffix: '+',
    subtext: 'Direct beneficiaries across education, nutrition, and relief',
    icon: 'Heart'
  },
  {
    id: 'stat-interns',
    label: 'Interns Trained',
    value: 30000,
    suffix: '+',
    subtext: 'College youth certified through hands-on social internships',
    icon: 'GraduationCap'
  },
  {
    id: 'stat-trees',
    label: 'Trees Planted',
    value: 20000,
    suffix: '+',
    subtext: 'Indigenous saplings monitored with 85%+ survival rate',
    icon: 'Trees'
  },
  {
    id: 'stat-volunteers',
    label: 'Active Volunteers',
    value: 200,
    suffix: '+',
    subtext: 'Passionate on-ground changemakers mobilizing weekly drives',
    icon: 'Users'
  }
];

export const timelineEvents = [
  {
    year: '2020',
    title: 'Foundation & Emergency COVID Relief',
    description: 'Founded by a passionate group of university students in response to the pandemic, mobilizing immediate ration kits and hygiene packs for 4,000+ migrant workers.'
  },
  {
    year: '2021',
    title: 'Community Expansion & Education Launch',
    description: 'Launched BachpanShala learning centers to address COVID-induced school closures, while initiating structured daily animal feeding circles.'
  },
  {
    year: '2022',
    title: 'New Initiatives: Udaan & Prakriti',
    description: 'Formalized women vocational tailoring collectives (Project Udaan) and launched our first multi-acre native Miyawaki afforestation projects (Prakriti).'
  },
  {
    year: '2023',
    title: 'Growing Volunteer Network & Youth Internships',
    description: 'Project Vikas expanded to 100+ universities across India, training over 15,000 interns in digital communications, grassroots advocacy, and social leadership.'
  },
  {
    year: '2024',
    title: 'Wider Social Impact & Institutional Recognition',
    description: 'Expanded active program touchpoints to 14 Indian states, reaching over 40,000 beneficiaries and partnering with corporate CSR sustainability teams.'
  },
  {
    year: '2025+',
    title: 'Scaling Sustainable Programs & Technology',
    description: 'Deploying solar-powered smart classroom tabs, establishing permanent artisan production clusters, and scaling to 50,000+ native trees with geotagged citizen monitoring.'
  }
];

export const impactSteps = [
  {
    step: '01',
    title: 'Identify',
    subtitle: 'Understand real community needs',
    description: 'We conduct comprehensive door-to-door participatory rural appraisals (PRA) and urban slum surveys to identify critical gaps in schooling, nutrition, and livelihood before taking action.',
    icon: 'Search'
  },
  {
    step: '02',
    title: 'Act',
    subtitle: 'Launch focused initiatives',
    description: 'We deploy targeted, culturally sensitive, and community-owned interventions—from smart study circles to vocational stitching hubs and native tree plantation nurseries.',
    icon: 'Zap'
  },
  {
    step: '03',
    title: 'Collaborate',
    subtitle: 'Work with volunteers and partners',
    description: 'We unite university youth interns, local neighborhood leaders, veterinary experts, and responsible corporate sponsors into an active execution coalition.',
    icon: 'Users'
  },
  {
    step: '04',
    title: 'Measure',
    subtitle: 'Track outcomes and improve continuously',
    description: 'Every program is backed by quantifiable metrics—reading fluency tests, tree geotag survival logs, and household income ledgers—ensuring utmost transparency.',
    icon: 'BarChart3'
  }
];

export const stateReachData = [
  { state: 'Delhi NCR', beneficiaries: '18,200+', centers: 18, color: 'emerald' },
  { state: 'Uttar Pradesh', beneficiaries: '14,500+', centers: 12, color: 'teal' },
  { state: 'Maharashtra', beneficiaries: '6,800+', centers: 6, color: 'emerald' },
  { state: 'Karnataka', beneficiaries: '4,200+', centers: 4, color: 'teal' },
  { state: 'West Bengal', beneficiaries: '3,500+', centers: 3, color: 'emerald' },
  { state: 'Rajasthan & Others', beneficiaries: '2,800+', centers: 4, color: 'teal' }
];

export const transparencyDocuments = [
  {
    title: 'Trust Registration & Deed',
    category: 'Legal Registration',
    identifier: '[Registration No: IN-NGO/2020/XXXX]',
    description: 'Registered under the Indian Trusts Act, 1882 as a non-profit public charitable organization dedicated to community welfare.',
    fileSize: '1.8 MB PDF',
    verified: true
  },
  {
    title: '12A & 80G Tax Exemption Certificate',
    category: 'Statutory Certification',
    identifier: '[Certificate: 12A/80G/PROV/XXXX]',
    description: 'Enables eligible Indian resident donors to claim 50% tax deductions on voluntary contributions under Section 80G of the Income Tax Act.',
    fileSize: '1.2 MB PDF',
    verified: true
  },
  {
    title: 'Annual Audited Financial Report FY 2024-25',
    category: 'Financial Disclosures',
    identifier: '[Annual Report FY 2024-25]',
    description: 'Comprehensive financial statements audited by independent Chartered Accountants, detailing program expenditure allocations and donor funds.',
    fileSize: '4.6 MB PDF',
    verified: true
  },
  {
    title: 'Social Impact & Sustainability Audit 2025',
    category: 'Impact Evaluation',
    identifier: '[Impact Audit Report 2025]',
    description: 'Independent evaluation assessing student retention gains, tree survival rates, and livelihood income improvements across program beneficiaries.',
    fileSize: '3.4 MB PDF',
    verified: true
  }
];

export const donationPresetTiers = [
  {
    amount: 200,
    label: '₹200',
    impact: 'Provides wholesome nutritious snacks for 4 children at BachpanShala'
  },
  {
    amount: 500,
    label: '₹500',
    popular: true,
    impact: 'Sponsors 1 native tree sapling with 3 years of geotagged compost & care'
  },
  {
    amount: 1000,
    label: '₹1,000',
    impact: 'Covers reflective safety collars and emergency first aid for 10 street dogs'
  },
  {
    amount: 2500,
    label: '₹2,500',
    impact: 'Funds 1 month of professional tailoring and craft training for a mother in Udaan'
  }
];

export const faqList = [
  {
    q: 'How are donation funds allocated at InAmigos Foundation?',
    a: 'More than 85% of every rupee contributed directly supports on-ground beneficiary operations—including educational materials, veterinary medicine, saplings, and raw training materials. Administrative overheads are strictly capped below 15%.'
  },
  {
    q: 'Are donations eligible for tax exemption in India?',
    a: 'Yes, eligible donations qualify for tax deduction under Section 80G of the Indian Income Tax Act. Upon successful completion of your donation, an official receipt containing statutory details is immediately generated for your tax filing.'
  },
  {
    q: 'Who can volunteer with InAmigos Foundation?',
    a: 'Anyone passionate about driving grassroots change! We welcome school and university students, corporate employees, homemakers, and retirees. Opportunities range from weekend field drives to virtual content, design, and research roles.'
  },
  {
    q: 'Can college students receive formal internship certificates?',
    a: 'Absolutely. Our Project Vikas offers structured 4-to-8 week social internships with verified completion certificates, performance letters of recommendation, and real-world project portfolios.'
  },
  {
    q: 'How does InAmigos ensure trees planted actually survive?',
    a: 'Under Project Prakriti, we plant only native indigenous varieties suited to local soil. Each site is geo-mapped, cared for by designated local community guardians, and monitored through a mandatory 36-month survival protocol.'
  }
];
