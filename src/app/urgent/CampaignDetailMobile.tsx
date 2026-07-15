'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, CheckCircle, Share2, Users } from 'lucide-react';

interface CampaignProps {
  id: string;
  title: string;
  image: string;
  raised: number;
  goal: number;
  daysLeft: number;
  donors: number;
  isUrgent: boolean;
  isVerified: boolean;
}

type CampaignDetails = {
  shortDescription: string;
  beneficiaryName: string;
  campaignerName: string;
  campaignerInitials: string;
  campaignerLocation: string;
  beneficiaryInitials: string;
  beneficiaryRelation: string;
  beneficiaryInstitution: string;
  storyQuote: string;
  storyQuoteAuthor: string;
  storyText: string;
  galleryImages: string[];
  documents: string[];
  updates: { id: number; date: string; author: string; content: string }[];
};

const campaignData: Record<string, CampaignDetails> = {
  'urgent-medical-emergency': {
    shortDescription: 'Before he crawls, SMA 1 steals his strength!',
    beneficiaryName: 'Aarav Sharma',
    campaignerName: 'Priya Sharma (Mother)',
    campaignerInitials: 'PS',
    campaignerLocation: 'Pune, Maharashtra',
    beneficiaryInitials: 'AS',
    beneficiaryRelation: 'Son',
    beneficiaryInstitution: 'Sanjivani Medical Foundation',
    storyQuote: 'Every child deserves a chance to smile, to play, to dream.',
    storyQuoteAuthor: 'A Mother\'s Hope',
    storyText:
      'When little Aarav was diagnosed with Spinal Muscular Atrophy (SMA) Type 1 at just 4 months old, his parents\' world came crashing down. SMA is a rare genetic disorder that affects the motor nerve cells in the spinal cord, leading to progressive muscle weakness and loss of movement.\n\nThe only FDA-approved treatment, Zolgensma, costs ₹16 crore — an impossible sum for any middle-class family. But Aarav\'s parents refused to give up. They reached out to Sanjivani NGO, and together we launched this emergency fundraiser.\n\nTime is critical for SMA patients. The treatment is most effective when administered before symptoms become severe. Aarav is already showing early signs — difficulty in holding his head, weak limb movements, and feeding challenges.\n\nYour donation can give Aarav the gift of life. Every rupee brings us closer to the treatment that can stop this disease in its tracks. Join us in saving this innocent life.',
    galleryImages: ['/images/medicalhelp.png'],
    documents: ['/documents/document-1.jpg', '/documents/document-2.jpg', '/documents/document-3.jpg'],
    updates: [
      { id: 1, date: '15 Jun 2024', author: 'Sanjivani Team', content: 'Aarav\'s condition has been reviewed by Dr. Mehta at AIIMS Delhi. We have submitted all necessary documents for the Zolgensma treatment application. Waiting for hospital approval.' },
      { id: 2, date: '10 Jun 2024', author: 'Priya Sharma', content: 'Thank you to all our donors! We have reached 30% of our target. Aarav\'s physiotherapy sessions are ongoing, and he\'s showing slight improvement in neck control.' },
      { id: 3, date: '5 Jun 2024', author: 'Sanjivani Team', content: 'Campaign verified and launched. Medical documents uploaded. Fundraising begins today.' },
    ],
  },
  'chest-pain-patient': {
    shortDescription: 'Ramesh needs urgent heart surgery to survive.',
    beneficiaryName: 'Ramesh Kumar',
    campaignerName: 'Sunita Devi (Wife)',
    campaignerInitials: 'SD',
    campaignerLocation: 'Mumbai, Maharashtra',
    beneficiaryInitials: 'RK',
    beneficiaryRelation: 'Father',
    beneficiaryInstitution: 'City General Hospital',
    storyQuote: 'Health is wealth, but sometimes wealth becomes health.',
    storyQuoteAuthor: 'Anonymous',
    storyText:
      'Ramesh Kumar, a 45-year-old daily wage worker, experienced severe chest pain while working at a construction site. He was rushed to the nearest government hospital where doctors suspected a heart attack.\n\nFurther tests revealed critical blockages in his coronary arteries requiring immediate angioplasty. The estimated cost for the procedure and hospital stay is ₹70,000 — far beyond what Ramesh can afford.\n\nAs the sole breadwinner for his family of five, Ramesh\'s inability to work has already pushed his family into financial distress. His wife and three children depend on his daily earnings for survival.\n\nThis fundraiser aims to cover Ramesh\'s medical expenses and provide temporary financial support to his family during his recovery period.',
    galleryImages: ['/images/patient.png'],
    documents: ['/documents/document-1.jpg', '/documents/document-2.jpg'],
    updates: [
      { id: 1, date: '20 Jun 2024', author: 'Sanjivani Team', content: 'Ramesh has undergone successful angioplasty. He is currently in ICU under observation. Doctors say he will need 2-3 weeks of rest before returning to work.' },
      { id: 2, date: '15 Jun 2024', author: 'Sunita Devi', content: 'We are grateful for the support received so far. Ramesh is stable but worried about mounting medical bills. Please continue to share and donate.' },
    ],
  },
  'food-distribution-vehicle': {
    shortDescription: 'Help us reach more people with food distribution.',
    beneficiaryName: 'Local Communities',
    campaignerName: 'Sanjivani NGO',
    campaignerInitials: 'SN',
    campaignerLocation: 'New Delhi, Delhi',
    beneficiaryInitials: 'LC',
    beneficiaryRelation: 'Supported Communities',
    beneficiaryInstitution: 'Sanjivani Food Bank',
    storyQuote: 'No one should go to bed hungry.',
    storyQuoteAuthor: 'Sanjivani Mission',
    storyText:
      'Sanjivani NGO has been distributing food to underprivileged communities across the city for years. However, our current vehicle has broken down, making it difficult to reach remote areas.\n\nWe need a new food distribution vehicle to continue our mission of feeding those in need. This vehicle will help us reach more communities, distribute food more efficiently, and ensure no one goes hungry.\n\nYour donation can help us purchase a reliable vehicle that will serve thousands of people for years to come. Join us in fighting hunger and making a difference.',
    galleryImages: ['/images/foodcar.png'],
    documents: ['/documents/document-1.jpg'],
    updates: [
      { id: 1, date: '18 Jun 2024', author: 'Sanjivani Team', content: 'We have identified a suitable vehicle for our food distribution needs. Now we need your support to purchase it.' },
    ],
  },
  'free-medical-help': {
    shortDescription: 'Providing free medical care to those who need it most.',
    beneficiaryName: 'Needy Patients',
    campaignerName: 'Sanjivani NGO',
    campaignerInitials: 'SN',
    campaignerLocation: 'New Delhi, Delhi',
    beneficiaryInitials: 'NP',
    beneficiaryRelation: 'Patients',
    beneficiaryInstitution: 'Sanjivani Medical Camps',
    storyQuote: 'Healthcare is a right, not a privilege.',
    storyQuoteAuthor: 'Sanjivani Mission',
    storyText:
      'Sanjivani NGO provides free medical help to needy people through regular medical camps, health checkups, and medicine distribution. We believe that healthcare should be accessible to everyone, regardless of their financial situation.\n\nOur medical camps provide free consultations, medicines, and basic treatments to thousands of people every year. We also organize health awareness programs and disease prevention campaigns.\n\nYour donation can help us expand our medical services, reach more communities, and provide better healthcare facilities to those in need.',
    galleryImages: ['/images/medicalhelp.png'],
    documents: ['/documents/document-1.jpg', '/documents/document-2.jpg'],
    updates: [
      { id: 1, date: '12 Jun 2024', author: 'Sanjivani Team', content: 'Our latest medical camp served over 500 patients with free consultations and medicines.' },
    ],
  },
  'birthday-celebration': {
    shortDescription: 'Celebrate birthdays with underprivileged children.',
    beneficiaryName: 'Underprivileged Children',
    campaignerName: 'Sanjivani NGO',
    campaignerInitials: 'SN',
    campaignerLocation: 'New Delhi, Delhi',
    beneficiaryInitials: 'UC',
    beneficiaryRelation: 'Children',
    beneficiaryInstitution: 'Sanjivani Child Care Center',
    storyQuote: 'Every child deserves to feel special on their birthday.',
    storyQuoteAuthor: 'Sanjivani Mission',
    storyText:
      'Sanjivani NGO celebrates birthdays of underprivileged children to bring joy and happiness to their lives. Many of these children have never had a proper birthday celebration before.\n\nWe organize birthday parties, cakes, gifts, and special treats for these children. It\'s a small gesture that brings big smiles to their faces and makes them feel loved and valued.\n\nYour donation can help us continue this heartwarming tradition and bring joy to more children on their special day.',
    galleryImages: ['/images/birthday.png'],
    documents: ['/documents/document-1.jpg'],
    updates: [
      { id: 1, date: '10 Jun 2024', author: 'Sanjivani Team', content: 'We celebrated 50 birthdays this month! Thank you for your support.' },
    ],
  },
  'village-road': {
    shortDescription: 'Help build roads for better village connectivity.',
    beneficiaryName: 'Village Communities',
    campaignerName: 'Sanjivani NGO',
    campaignerInitials: 'SN',
    campaignerLocation: 'Rural Areas',
    beneficiaryInitials: 'VC',
    beneficiaryRelation: 'Villagers',
    beneficiaryInstitution: 'Sanjivani Rural Development',
    storyQuote: 'Better roads lead to better lives.',
    storyQuoteAuthor: 'Sanjivani Mission',
    storyText:
      'Many villages lack proper road connectivity, making it difficult for residents to access essential services, markets, and healthcare. Sanjivani NGO is working to build roads in these villages to improve connectivity and quality of life.\n\nGood roads enable children to reach schools safely, farmers to transport their produce, and patients to reach hospitals in emergencies. It\'s a basic infrastructure that most of us take for granted.\n\nYour donation can help us build roads that will transform lives and open up opportunities for rural communities.',
    galleryImages: ['/images/road.png'],
    documents: ['/documents/document-1.jpg', '/documents/document-2.jpg'],
    updates: [
      { id: 1, date: '15 Jun 2024', author: 'Sanjivani Team', content: 'Road construction has begun in the first village. We need more support to complete it.' },
    ],
  },
};

function currency(value: number) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
}

export default function CampaignDetailMobile({ campaign }: { campaign: CampaignProps }) {
  const [storyExpanded, setStoryExpanded] = useState(false);
  const [updatesExpanded, setUpdatesExpanded] = useState(false);

  const activeDetails = campaignData[campaign.id] || campaignData['urgent-medical-emergency'];
  const percentage = Math.min(100, Math.round((campaign.raised / campaign.goal) * 100));

  return (
    <div className="md:hidden bg-[#F6F8FB] text-slate-900">
      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => window.history.back()} className="rounded-full p-2 hover:bg-slate-100" aria-label="Go back">
            <ChevronLeft size={22} />
          </button>
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={34} height={34} className="object-contain" />
            <div>
              <p className="text-sm font-black leading-tight text-slate-900">Sanjivani</p>
              <p className="text-[11px] text-slate-500">Building a better tomorrow</p>
            </div>
          </div>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: campaign.title, text: `Help support ${campaign.title}`, url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
              }
            }}
            className="rounded-full p-2 hover:bg-slate-100"
            aria-label="Share campaign"
            title="Share campaign"
          >
            <Share2 size={20} className="text-slate-700" />
          </button>
        </div>
      </div>

      <main className="space-y-4 px-4 py-4">
        <section className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
          <div className="relative h-[280px]">
            <Image src={campaign.image} alt={campaign.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              {campaign.isVerified && <span className="rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-bold text-white">Verified</span>}
              {campaign.isUrgent && <span className="rounded-full bg-rose-600 px-3 py-1 text-[11px] font-bold text-white">Urgent</span>}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-100">{campaign.daysLeft} days left</p>
              <h1 className="mt-1 text-2xl font-black leading-tight text-white">{campaign.title}</h1>
              <p className="mt-2 text-sm leading-6 text-slate-100">{activeDetails.shortDescription}</p>
            </div>
          </div>

          <div className="space-y-4 p-4">
            <div className="flex items-center justify-between text-sm font-bold text-emerald-700">
              <span>{currency(campaign.raised)} raised</span>
              <span>{percentage}% funded</span>
            </div>
            <progress
              className="h-2 w-full overflow-hidden rounded-full [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-emerald-600 [&::-moz-progress-bar]:bg-emerald-600"
              value={percentage}
              max={100}
            />
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="font-bold text-slate-900">{campaign.donors}</p>
                <p className="text-slate-500">Supporters</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="font-bold text-slate-900">{currency(campaign.goal)}</p>
                <p className="text-slate-500">Goal</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="font-bold text-slate-900">{campaign.daysLeft}d</p>
                <p className="text-slate-500">Time left</p>
              </div>
            </div>
            <button className="w-full rounded-full bg-slate-900 py-3 text-sm font-bold text-white shadow-sm">Donate now</button>
          </div>
        </section>

        <section className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Story</p>
          <div className="mt-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
            {activeDetails.storyQuote} - {activeDetails.storyQuoteAuthor}
          </div>
          <div className={`mt-4 space-y-3 text-sm leading-7 text-slate-600 ${storyExpanded ? '' : 'max-h-40 overflow-hidden'}`}>
            {activeDetails.storyText.split('\n\n').map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
          <button
            onClick={() => setStoryExpanded((value) => !value)}
            className="mt-4 rounded-full border border-emerald-200 px-4 py-2 text-sm font-bold text-emerald-700"
          >
            {storyExpanded ? 'Show less' : 'Read more'}
          </button>
        </section>

        <section className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Media</p>
          <div className="mt-3 grid gap-3">
            {[...activeDetails.galleryImages, ...activeDetails.documents].slice(0, 4).map((src) => (
              <div key={src} className="relative h-40 overflow-hidden rounded-2xl bg-slate-100">
                <Image src={src} alt="Campaign media" fill className="object-cover" />
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Campaigner</p>
              <p className="text-sm font-bold text-slate-900">{activeDetails.campaignerName}</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-black text-slate-700">
              {activeDetails.campaignerInitials}
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
            <Users size={14} className="text-slate-400" />
            {activeDetails.campaignerLocation}
            <span className="text-slate-300">|</span>
            <CheckCircle size={14} className="text-emerald-600" /> Verified
          </div>
        </section>

        <section className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Beneficiary</p>
              <p className="text-sm font-bold text-slate-900">{activeDetails.beneficiaryName}</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-black text-slate-700">
              {activeDetails.beneficiaryInitials}
            </div>
          </div>
          <div className="mt-3 text-sm leading-6 text-slate-600">
            <p>
              Relation: <span className="font-semibold text-slate-900">{activeDetails.beneficiaryRelation}</span>
            </p>
            <p className="mt-1">
              Located at <span className="font-semibold text-slate-900">{activeDetails.beneficiaryInstitution}</span>
            </p>
          </div>
        </section>

        <section className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Updates</p>
            {activeDetails.updates.length > 1 && (
              <button onClick={() => setUpdatesExpanded((value) => !value)} className="text-sm font-bold text-emerald-700">
                {updatesExpanded ? 'Show less' : 'View all'}
              </button>
            )}
          </div>
          <div className="mt-3 space-y-3">
            {activeDetails.updates.slice(0, updatesExpanded ? activeDetails.updates.length : 1).map((update) => (
              <article key={update.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  <span>{update.date}</span>
                  <span>{update.author}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-700">{update.content}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="h-4" />
      </main>
    </div>
  );
}