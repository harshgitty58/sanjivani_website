export interface CampaignDonation {
  initials: string;
  name: string;
  amount: number;
}

export interface CampaignUpdate {
  date: string;
  author: string;
  content: string;
}

export interface Campaign {
  id: string;
  title: string;
  image: string;
  videoUrl?: string;
  gallery: string[];
  category: string;
  badge: string;
  urgency?: string;
  shortDescription: string;
  story: string;
  fund: string;
  goalAmount: number;
  raised: string;
  raisedAmount: number;
  percent: string;
  daysLeft: number;
  supporters: number;
  verified: boolean;
  featured: boolean;
  impactPoints: string[];
  updates: CampaignUpdate[];
  campaignerName: string;
  campaignerLocation: string;
  beneficiaryName: string;
  beneficiaryRelation: string;
  beneficiaryStatus: string;
  donations: CampaignDonation[];
  sharesCount: number;
  documents: string[];
}

export const campaigns: Campaign[] = [
  {
    id: 'urgent-medical-emergency',
    title: 'Urgent Medical Emergency Fund',
    image: '/images/medicalhelp.png',
    videoUrl: '/videos/medical-emergency.mp4',
    gallery: ['/images/medicalhelp.png', '/images/patient.png', '/images/commandhospital.png'],
    category: 'Medical',
    badge: 'Tax Benefit',
    urgency: 'Urgent',
    shortDescription:
      'Emergency surgery is required for a critical cardiac patient. Immediate coronary artery bypass grafting is needed to save a life.',
    story:
      'A 48-year-old father of two was rushed to Sanjivani Multispecialty Hospital after collapsing at work due to severe chest pain. Doctors diagnosed him with Triple Vessel Coronary Artery Disease (CAD) — a life-threatening condition that requires emergency Coronary Artery Bypass Grafting (CABG) surgery.\n\nThe family, already struggling financially, cannot afford the estimated ₹5,00,000 needed for the surgery, ICU stay, medicines, and post-operative care. Every hour of delay increases the risk.\n\nYour donation directly covers the surgical costs, ICU charges, medicines, and follow-up care. The hospital has confirmed that the surgery can proceed as soon as funds are arranged. Every rupee counts — even a small contribution brings this family closer to saving their father\'s life.\n\nSanjivani has verified all medical documents, hospital bills, and the patient\'s identity. 100% of donations go towards the treatment. Tax benefits under section 80G are available for all contributions.',
    fund: '₹5,00,000',
    goalAmount: 500000,
    raised: '₹1,60,000',
    raisedAmount: 160000,
    percent: '32%',
    daysLeft: 12,
    supporters: 84,
    verified: true,
    featured: true,
    impactPoints: [
      'Emergency cardiac bypass surgery',
      'ICU ward and post-operative care',
      'Medicines and surgical consumables',
    ],
    updates: [
      {
        date: 'Today',
        author: 'Sanjivani Team',
        content:
          'The patient has been stabilized in the ICU. The surgical team is on standby and the procedure will begin as soon as funding is secured.',
      },
      {
        date: '2 days ago',
        author: 'Hospital Staff',
        content:
          'All pre-operative tests have been completed. The patient is responding well to initial medication but surgery remains urgent.',
      },
      {
        date: '4 days ago',
        author: 'Family Member',
        content:
          'We are overwhelmed by the support. Thank you to everyone who has donated so far. Please continue sharing — every share brings hope.',
      },
    ],
    campaignerName: 'Sanjivani NGO Trust',
    campaignerLocation: 'Pune, Maharashtra',
    beneficiaryName: 'Mr. Rajesh Kumar',
    beneficiaryRelation: 'Patient (Self)',
    beneficiaryStatus: 'Currently admitted in ICU',
    donations: [
      { initials: 'JK', name: 'Jeyanth K', amount: 30000 },
      { initials: 'PR', name: 'Pushkar R', amount: 15000 },
      { initials: 'R', name: 'Rijo', amount: 13165 },
      { initials: 'ID', name: 'ImpactGuru Donor', amount: 11000 },
      { initials: 'NG', name: 'Niket G', amount: 11000 },
      { initials: 'AM', name: 'Anjali M', amount: 10000 },
      { initials: 'SK', name: 'Suresh K', amount: 8000 },
      { initials: 'PD', name: 'Priya D', amount: 7500 },
      { initials: 'RV', name: 'Rahul V', amount: 5000 },
      { initials: 'AN', name: 'Anonymous', amount: 5000 },
    ],
    sharesCount: 157,
    documents: [],
  },
  {
    id: 'chest-pain-patient',
    title: 'Help save a life. Chest pain, suspecting a heart issue.',
    image: '/images/patient.png',
    gallery: ['/images/patient.png', '/images/medicalhelp.png'],
    category: 'Medical',
    badge: 'Tax Benefit',
    urgency: 'Urgent',
    shortDescription: 'A working family needs immediate cardiac treatment support.',
    story:
      'Doctors suspect a critical heart condition and immediate treatment is needed. This fundraiser helps cover hospital costs, medicines, and follow-up care for a family that cannot afford the procedure on its own.\n\nThe patient, a 52-year-old daily wage worker, experienced severe chest pain and was brought to the nearest hospital. Preliminary tests suggest a major blockage in the coronary arteries. The family has exhausted their savings on initial tests and stabilization.\n\nWe need your support to fund the complete treatment including angiography, possible stent placement, ICU stay, and recovery care. The Sanjivani team has verified all documents and is coordinating with the hospital for immediate treatment.',
    fund: '₹70,000',
    goalAmount: 70000,
    raised: '₹9,000',
    raisedAmount: 9000,
    percent: '13%',
    daysLeft: 8,
    supporters: 18,
    verified: true,
    featured: true,
    impactPoints: ['Immediate cardiac care', 'Hospital bills and medicines', 'Family support during recovery'],
    updates: [
      {
        date: 'Today',
        author: 'Sanjivani Team',
        content:
          'The patient has been admitted and the care plan is being prepared with the hospital team.',
      },
      {
        date: '2 days ago',
        author: 'Family member',
        content:
          'Thank you for the support and for helping us respond quickly to this emergency.',
      },
    ],
    campaignerName: 'Sanjivani NGO Trust',
    campaignerLocation: 'Pune, Maharashtra',
    beneficiaryName: 'Patient Family',
    beneficiaryRelation: 'Family of patient',
    beneficiaryStatus: 'Patient currently admitted',
    donations: [
      { initials: 'SK', name: 'Suresh K', amount: 3000 },
      { initials: 'AM', name: 'Anjali M', amount: 2500 },
      { initials: 'RD', name: 'Rajiv D', amount: 2000 },
      { initials: 'PL', name: 'Priya L', amount: 1500 },
    ],
    sharesCount: 42,
    documents: [],
  },
  {
    id: 'food-distribution-vehicle',
    title: 'Sanjivani needs a vehicle to distribute food across the city.',
    image: '/images/foodcar.png',
    gallery: ['/images/foodcar.png', '/images/food.JPG', '/images/food1.jpg'],
    category: 'Community',
    badge: 'Tax Benefit',
    shortDescription: 'A reliable vehicle will help the team reach more people every day.',
    story:
      'Our food distribution work depends on a dependable vehicle. This campaign helps us continue supplying meals to underserved communities, senior citizens, and families in remote pockets of the city.\n\nEvery day, Sanjivani volunteers prepare and distribute meals to over 200 people across different parts of the city. Currently, we rely on borrowed vehicles and auto-rickshaws which limits our reach and increases costs. A dedicated vehicle will allow us to serve more communities, carry larger quantities of food safely, and respond faster to emergency food needs.\n\nYour contribution goes directly towards purchasing a reliable food distribution vehicle that will serve thousands of meals for years to come.',
    fund: '₹1,50,000',
    goalAmount: 150000,
    raised: '₹80,000',
    raisedAmount: 80000,
    percent: '53%',
    daysLeft: 15,
    supporters: 42,
    verified: true,
    featured: true,
    impactPoints: ['Daily food distribution', 'Remote area access', 'Long-term community support'],
    updates: [
      {
        date: 'Yesterday',
        author: 'Sanjivani Team',
        content:
          'We have shortlisted a suitable vehicle and are now focused on closing the funding gap.',
      },
    ],
    campaignerName: 'Sanjivani NGO Trust',
    campaignerLocation: 'Pune, Maharashtra',
    beneficiaryName: 'Sanjivani Food Program',
    beneficiaryRelation: 'Community initiative',
    beneficiaryStatus: 'Active daily operations',
    donations: [
      { initials: 'VR', name: 'Vinay R', amount: 15000 },
      { initials: 'MS', name: 'Meena S', amount: 10000 },
      { initials: 'AK', name: 'Arun K', amount: 8000 },
      { initials: 'DP', name: 'Deepa P', amount: 5000 },
      { initials: 'RN', name: 'Rohan N', amount: 5000 },
    ],
    sharesCount: 89,
    documents: [],
  },
  {
    id: 'free-medical-help',
    title: 'Sanjivani provides free medical help to needy people.',
    image: '/images/medicalhelp.png',
    gallery: ['/images/medicalhelp.png', '/images/commandhospital.png'],
    category: 'Medical',
    badge: 'Tax Benefit',
    urgency: 'Urgent',
    shortDescription: 'Free medical help, health camps, and treatment assistance for families in need.',
    story:
      'Sanjivani runs free medical help programs, health checkups, and medicine distribution for families who cannot afford private care. Donations directly support camps, medicines, and doctor visits.\n\nOur medical outreach program has served over 5,000 patients in the past year alone. We organize monthly health camps in rural and semi-urban areas where access to healthcare is limited. Each camp provides free consultations, basic diagnostic tests, and a 30-day supply of essential medicines.\n\nWith your support, we can expand to more locations, bring specialist doctors, and provide follow-up care for patients with chronic conditions.',
    fund: '₹70,000',
    goalAmount: 70000,
    raised: '₹48,000',
    raisedAmount: 48000,
    percent: '69%',
    daysLeft: 20,
    supporters: 61,
    verified: true,
    featured: false,
    impactPoints: ['Free health camps', 'Medicines and diagnostics', 'Preventive care outreach'],
    updates: [
      {
        date: '3 days ago',
        author: 'Sanjivani Team',
        content:
          'Our latest medical camp served more than 500 patients with consultations and medicines.',
      },
    ],
    campaignerName: 'Sanjivani NGO Trust',
    campaignerLocation: 'Pune, Maharashtra',
    beneficiaryName: 'Community Health Program',
    beneficiaryRelation: 'Public health initiative',
    beneficiaryStatus: 'Ongoing program',
    donations: [
      { initials: 'KP', name: 'Kiran P', amount: 10000 },
      { initials: 'SG', name: 'Sonal G', amount: 8000 },
      { initials: 'NM', name: 'Nitin M', amount: 5000 },
      { initials: 'RK', name: 'Rekha K', amount: 5000 },
      { initials: 'AN', name: 'Anonymous', amount: 3000 },
    ],
    sharesCount: 124,
    documents: [],
  },
  {
    id: 'birthday-celebration',
    title: 'Sanjivani celebrates your birthday with children in need.',
    image: '/images/birthday.png',
    gallery: ['/images/birthday.png', '/images/giftdiwali.JPG', '/images/happy.jpg'],
    category: 'Community',
    badge: 'Tax Benefit',
    shortDescription: 'Celebrate a birthday while creating a memorable day for underprivileged children.',
    story:
      'This campaign turns birthdays into shared celebrations. Donors help fund cakes, gifts, and small gatherings that make children feel included, valued, and remembered.\n\nEvery child deserves to feel special on their birthday. Through this program, we organize birthday parties for children in orphanages, shelters, and low-income communities. Each celebration includes a cake, small gifts, games, and a warm gathering that brings joy to dozens of children.\n\nYour donation helps us create magical moments for children who have never had a birthday celebration of their own.',
    fund: '₹70,000',
    goalAmount: 70000,
    raised: '₹5,000',
    raisedAmount: 5000,
    percent: '7%',
    daysLeft: 30,
    supporters: 9,
    verified: true,
    featured: false,
    impactPoints: ['Birthday cakes and gifts', 'Community celebration', 'Joy for children'],
    updates: [
      {
        date: '5 days ago',
        author: 'Sanjivani Team',
        content:
          'A small birthday celebration was organized for children at the care center this week.',
      },
    ],
    campaignerName: 'Sanjivani NGO Trust',
    campaignerLocation: 'Pune, Maharashtra',
    beneficiaryName: 'Underprivileged Children',
    beneficiaryRelation: 'Community children',
    beneficiaryStatus: 'Active program',
    donations: [
      { initials: 'SP', name: 'Sneha P', amount: 2000 },
      { initials: 'VK', name: 'Vivek K', amount: 1500 },
      { initials: 'RT', name: 'Rita T', amount: 1500 },
    ],
    sharesCount: 31,
    documents: [],
  },
  {
    id: 'village-road',
    title: 'Sanjivani helps village people build roads in the village.',
    image: '/images/road.png',
    gallery: ['/images/road.png', '/images/Infrastr.jpeg'],
    category: 'Community',
    badge: 'Tax Benefit',
    shortDescription: 'Road access improves mobility, education, and healthcare access for villagers.',
    story:
      'Good roads make daily life easier for villagers. This campaign supports road-building efforts that improve access to schools, markets, and hospitals for rural communities.\n\nIn many villages around Pune, muddy and broken pathways make it nearly impossible for children to reach school during monsoon, for patients to reach hospitals in time, and for farmers to transport their produce to the market. Sanjivani has partnered with local panchayats to build proper all-weather roads.\n\nYour donation helps purchase construction materials, hire local workers (providing employment), and complete road segments that connect villages to essential services.',
    fund: '₹70,000',
    goalAmount: 70000,
    raised: '₹28,000',
    raisedAmount: 28000,
    percent: '40%',
    daysLeft: 25,
    supporters: 27,
    verified: true,
    featured: false,
    impactPoints: ['Rural connectivity', 'Safer travel', 'Access to schools and hospitals'],
    updates: [
      {
        date: '1 week ago',
        author: 'Sanjivani Team',
        content:
          'The first stretch of road work has begun and materials are being arranged.',
      },
    ],
    campaignerName: 'Sanjivani NGO Trust',
    campaignerLocation: 'Pune, Maharashtra',
    beneficiaryName: 'Rural Village Community',
    beneficiaryRelation: 'Village panchayat',
    beneficiaryStatus: 'Construction in progress',
    donations: [
      { initials: 'GS', name: 'Ganesh S', amount: 5000 },
      { initials: 'PM', name: 'Prashant M', amount: 5000 },
      { initials: 'LK', name: 'Lakshmi K', amount: 3000 },
      { initials: 'BD', name: 'Bharat D', amount: 3000 },
      { initials: 'AN', name: 'Anonymous', amount: 2000 },
    ],
    sharesCount: 56,
    documents: [],
  },
];

export const campaignCategories = ['All', 'Medical', 'Community'];
