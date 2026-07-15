'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Share2, Users, Copy, Stethoscope, Shield, Handshake, Check } from 'lucide-react';
import DonationPopup from './DonationPopup';

interface CampaignProps {
  id: string;
  title: string;
  image: string;
  fund: string;
  raised: string;
  percent: string;
}

export default function UrgentCampaignDetail({ campaign }: { campaign: CampaignProps }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const [copied, setCopied] = useState(false);
  const [storyExpanded, setStoryExpanded] = useState(false);
  const [activeDocIndex, setActiveDocIndex] = useState(0);
  const [updatesExpanded, setUpdatesExpanded] = useState(false);
  const [declarationExpanded, setDeclarationExpanded] = useState(false);
  const [showDonationPopup, setShowDonationPopup] = useState(false);

  // Dynamic campaign data lookup
  const dynamicData: Record<string, {
    storyQuote: string;
    storyQuoteAuthor: string;
    storyParagraphs: string[];
    beneficiaryName: string;
    beneficiaryInitials: string;
    beneficiaryRelation: string;
    beneficiaryInstitution: string;
    campaignerName: string;
    campaignerLocation: string;
    videoUrl?: string;
    documents: { type: string; label: string }[];
    updates: { date: string; author: string; content: string }[];
  }> = {
    'urgent-medical-emergency': {
      storyQuote: 'Every child deserves a chance to smile, to play, to dream.',
      storyQuoteAuthor: 'A Mother\'s Hope',
      storyParagraphs: [
        'When little Aarav was diagnosed with Spinal Muscular Atrophy (SMA) Type 1 at just 4 months old, his parents\' world came crashing down. SMA is a rare genetic disorder that affects the motor nerve cells in the spinal cord, leading to progressive muscle weakness and loss of movement.',
        'The only FDA-approved treatment, Zolgensma, costs ₹16 crore — an impossible sum for any middle-class family. But Aarav\'s parents refused to give up. They reached out to Sanjivani NGO, and together we launched this emergency fundraiser.',
        'Time is critical for SMA patients. The treatment is most effective when administered before symptoms become severe. Aarav is already showing early signs — difficulty in holding his head, weak limb movements, and feeding challenges.',
        'Your donation can give Aarav the gift of life. Every rupee brings us closer to the treatment that can stop this disease in its tracks. Join us in saving this innocent life.',
      ],
      beneficiaryName: 'Aarav Sharma',
      beneficiaryInitials: 'AS',
      beneficiaryRelation: 'Son',
      beneficiaryInstitution: 'Sanjivani Medical Foundation',
      campaignerName: 'Priya Sharma (Mother)',
      campaignerLocation: 'Pune, Maharashtra',
      videoUrl: '/videos/medical-emergency.mp4',
      documents: [
        { type: 'medical', label: 'Medical Report' },
        { type: 'id', label: 'Patient ID Proof' },
        { type: 'hospital', label: 'Hospital Estimate' },
        { type: 'prescription', label: 'Doctor Prescription' },
      ],
      updates: [
        { date: '15 Jun 2024', author: 'Sanjivani Team', content: 'Aarav\'s condition has been reviewed by Dr. Mehta at AIIMS Delhi. We have submitted all necessary documents for the Zolgensma treatment application. Waiting for hospital approval.' },
        { date: '10 Jun 2024', author: 'Priya Sharma', content: 'Thank you to all our donors! We have reached 30% of our target. Aarav\'s physiotherapy sessions are ongoing, and he\'s showing slight improvement in neck control.' },
        { date: '5 Jun 2024', author: 'Sanjivani Team', content: 'Campaign verified and launched. Medical documents uploaded. Fundraising begins today.' },
      ],
    },
    'chest-pain-patient': {
      storyQuote: 'Health is wealth, but sometimes wealth becomes health.',
      storyQuoteAuthor: 'Anonymous',
      storyParagraphs: [
        'Ramesh Kumar, a 45-year-old daily wage worker, experienced severe chest pain while working at a construction site. He was rushed to the nearest government hospital where doctors suspected a heart attack.',
        'Further tests revealed critical blockages in his coronary arteries requiring immediate angioplasty. The estimated cost for the procedure and hospital stay is ₹70,000 — far beyond what Ramesh can afford.',
        'As the sole breadwinner for his family of five, Ramesh\'s inability to work has already pushed his family into financial distress. His wife and three children depend on his daily earnings for survival.',
        'This fundraiser aims to cover Ramesh\'s medical expenses and provide temporary financial support to his family during his recovery period.',
      ],
      beneficiaryName: 'Ramesh Kumar',
      beneficiaryInitials: 'RK',
      beneficiaryRelation: 'Father',
      beneficiaryInstitution: 'City General Hospital',
      campaignerName: 'Sunita Devi (Wife)',
      campaignerLocation: 'Mumbai, Maharashtra',
      documents: [
        { type: 'medical', label: 'Medical Report' },
        { type: 'id', label: 'Aadhar Card' },
        { type: 'hospital', label: 'Hospital Estimate' },
      ],
      updates: [
        { date: '20 Jun 2024', author: 'Sanjivani Team', content: 'Ramesh has undergone successful angioplasty. He is currently in ICU under observation. Doctors say he will need 2-3 weeks of rest before returning to work.' },
        { date: '15 Jun 2024', author: 'Sunita Devi', content: 'We are grateful for the support received so far. Ramesh is stable but worried about mounting medical bills. Please continue to share and donate.' },
      ],
    },
  };

  const activeDetails = dynamicData[campaign.id] || dynamicData['urgent-medical-emergency'];

  const handleCopy = () => {
    navigator.clipboard.writeText('connect@sanjivani.ngo');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDonateClick = () => {
    setShowDonationPopup(true);
  };

  const handleDonate = (amount: number, isMonthly: boolean) => {
    console.log('Donation amount:', amount, 'Monthly:', isMonthly);
    // Here you would integrate with actual payment gateway
    setShowDonationPopup(false);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 py-4">
      {/* ──────────────────────────────────────────────────────── */}
      {/* WINDOWS VIEW (Desktop - lg+) Layout */}
      {/* ──────────────────────────────────────────────────────── */}
      <div className="hidden lg:block space-y-6">
        {/* Title & Badges Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex justify-center gap-2 flex-1">
              <span className="badge badge-success inline-flex items-center gap-1.5 py-1 px-3.5 font-bold text-[10px] uppercase tracking-wider bg-[#16836A] text-white">
                <Stethoscope size={12} /> Medical
              </span>
              <span className="badge badge-success inline-flex items-center gap-1.5 py-1 px-3.5 font-bold text-[10px] uppercase tracking-wider bg-[#16836A] text-white">
                <Shield size={12} /> Tax Benefits
              </span>
            </div>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: campaign.title,
                    text: `Help support ${campaign.title}`,
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }
              }}
              className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition"
              title="Share campaign"
            >
              <Share2 size={18} className="text-gray-600" />
            </button>
          </div>
          <h1 className="text-2xl font-extrabold leading-tight text-[var(--color-secondary)]">
            {campaign.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column: Image/Video, Gallery, Story */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card overflow-hidden bg-white p-4 shadow-sm border border-[#E2E8F0] rounded-2xl">
              {/* Main Image/Video display area */}
              <div className={`relative rounded-xl overflow-hidden group mx-auto ${activeDetails.videoUrl ? 'h-[550px] aspect-[9/16] bg-transparent' : 'w-full aspect-[16/10] bg-slate-900'
                }`}>
                {activeDetails.videoUrl ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="block h-full w-full object-cover object-[center_top]"
                  >
                    <source src={activeDetails.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={campaign.image}
                    alt="Campaign"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Verified badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#16836A] text-white font-extrabold text-[11px] px-4 py-2 rounded-br-xl shadow uppercase tracking-wider">
                    Verified
                  </span>
                </div>
              </div>

              {/* Document Gallery */}
              <div className="mt-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-sm text-gray-900">Documents</h3>
                  <span className="text-xs text-gray-500">{activeDetails.documents.length} files</span>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {activeDetails.documents.map((doc, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveDocIndex(idx)}
                      className={`flex-shrink-0 px-4 py-2 rounded-lg text-xs font-semibold border transition-all ${activeDocIndex === idx
                        ? 'bg-[#16836A] text-white border-[#16836A]'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-[#16836A]'
                        }`}
                    >
                      {doc.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Story Card */}
            <div className="card p-6 bg-white shadow-sm border border-[#E2E8F0] rounded-2xl space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#16836A] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {activeDetails.beneficiaryInitials}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-900">{activeDetails.beneficiaryName}</p>
                    <p className="text-xs text-gray-500">{activeDetails.beneficiaryRelation} • {activeDetails.beneficiaryInstitution}</p>
                  </div>
                </div>

                <blockquote className="italic text-sm text-gray-600 bg-[#FEF9E7] p-4 rounded-lg border border-[#FEF3C7] leading-relaxed">
                  "{activeDetails.storyQuote}" — {activeDetails.storyQuoteAuthor}
                </blockquote>

                <div className={`text-sm text-gray-600 leading-relaxed space-y-3 transition-all duration-300 relative ${storyExpanded ? '' : 'max-h-36 overflow-hidden'}`}>
                  {activeDetails.storyParagraphs.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                  {!storyExpanded && (
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
                  )}
                </div>

                <button
                  onClick={() => setStoryExpanded(!storyExpanded)}
                  className="mx-auto block border-2 border-[#16836A] text-[#16836A] font-bold text-xs px-6 py-2 rounded-full hover:bg-[#16836A] hover:text-white transition-all"
                >
                  {storyExpanded ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>

            {/* Updates Card */}
            <div className="card p-6 bg-white shadow-sm border border-[#E2E8F0] rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm text-gray-900">Latest Updates</h3>
                <span className="bg-emerald-50 border border-emerald-100 text-[#16836A] font-extrabold text-[9px] px-2 py-1 rounded-full uppercase tracking-wider">
                  ✓ Verified
                </span>
              </div>

              <div className="border-t pt-4 space-y-4">
                {activeDetails.updates.slice(0, itemsPerPage).map((update, idx) => (
                  <div key={idx} className="space-y-2">
                    <p className="text-xs font-bold text-gray-700">
                      #{idx + 1} ({update.date}) <span className="font-normal text-gray-400 italic">- From {update.author}</span>
                    </p>
                    <p className={`text-xs text-gray-500 leading-relaxed ${updatesExpanded ? '' : 'line-clamp-4'}`}>
                      {update.content}
                    </p>
                  </div>
                ))}
              </div>

              {activeDetails.updates.length > itemsPerPage && (
                <button
                  onClick={() => setUpdatesExpanded(!updatesExpanded)}
                  className="mx-auto block text-xs font-bold text-[#16836A] hover:underline"
                >
                  {updatesExpanded ? 'Show Less' : 'View All Updates'}
                </button>
              )}
            </div>

            {/* Declarations Card */}
            <div className="bg-slate-50 p-6 border border-gray-100 rounded-2xl space-y-4">
              <div className={`space-y-4 transition-all duration-300 ${declarationExpanded ? '' : 'max-h-40 overflow-hidden relative'}`}>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">NO INFLUENCE DECLARATION</h4>
                  <p className="text-[10px] text-gray-400 leading-relaxed italic">
                    Sanjivani does not influence / control the decision of the campaigner / patient with respect to choice of hospital / doctor / healthcare treatment.
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">TREATMENT COST ESTIMATES</h4>
                  <p className="text-[10px] text-gray-400 leading-relaxed italic">
                    Sanjivani has no control over the cost estimates provided by hospitals / clinics.
                  </p>
                </div>
                {!declarationExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-slate-50 to-transparent" />
                )}
              </div>

              <button
                onClick={() => setDeclarationExpanded(!declarationExpanded)}
                className="mx-auto block text-xs font-bold text-[#16836A]"
              >
                {declarationExpanded ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>

          {/* Right Column: Funding card & Recent donations */}
          <div className="space-y-6">
            {/* Funding Progress & Action Card */}
            <div className="card p-6 bg-white shadow-md border border-[#E2E8F0] rounded-2xl space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Progress</span>
                <span className="text-sm font-extrabold text-[#16836A]">{campaign.percent} Funded</span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <progress
                  className="h-2 w-full overflow-hidden rounded-full [&::-webkit-progress-bar]:bg-gray-100 [&::-webkit-progress-value]:bg-[#16836A] [&::-moz-progress-bar]:bg-[#16836A]"
                  value={Math.min(100, parseInt(campaign.percent, 10) || 0)}
                  max={100}
                />
              </div>

              {/* Raised stats */}
              <div className="text-center py-2 bg-slate-50 rounded-xl">
                <p className="text-lg font-extrabold text-gray-800">
                  {campaign.raised} Raised
                </p>
                <p className="text-xs text-gray-500 font-semibold mt-1">
                  Goal: {campaign.fund}
                </p>
              </div>

              <button onClick={handleDonateClick} className="w-full bg-[#E87B35] hover:bg-[#FB923C] text-white font-extrabold text-sm py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5">
                DONATE NOW
                <span className="block text-[10px] font-normal opacity-90">(INDIAN TAX BENEFITS AVAILABLE)</span>
              </button>

              <button className="w-full bg-[#3182CE] hover:bg-[#2B6CB0] text-white font-extrabold text-sm py-3.5 rounded-xl shadow transition-all flex items-center justify-center gap-2">
                <Share2 size={16} /> SHARE ON FACEBOOK
              </button>

              {/* UPI section */}
              <div className="bg-[#EDF2F7] p-3.5 rounded-xl border border-gray-200 text-center space-y-2">
                <p className="text-xs font-bold text-gray-700">Or donate via UPI</p>
                <div className="flex items-center justify-center gap-2">
                  <div className="bg-white px-3 py-2 rounded-lg border border-gray-300">
                    <span className="text-xs font-bold text-gray-800">sanjivani@upi</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="bg-[#16836A] hover:bg-[#1a9d7f] text-white p-2 rounded-lg transition"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* Campaigner info */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <Users size={18} className="text-gray-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">{activeDetails.campaignerName}</p>
                    <p className="text-[10px] text-gray-500">{activeDetails.campaignerLocation}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporters Card */}
            <div className="card p-5 bg-white shadow-sm border border-[#E2E8F0] rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-sm text-gray-900">Recent Supporters</h3>
                <div className="flex items-center gap-1.5 ml-auto text-xs font-bold text-gray-500 border border-gray-200 px-3.5 py-1 rounded-full bg-slate-50">
                  <Handshake size={12} /> {campaign.id === 'urgent-medical-emergency' ? '411' : '84'} Shares
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { name: 'Anonymous', amount: '₹5,000', time: '2 hours ago' },
                  { name: 'Rahul M.', amount: '₹2,000', time: '5 hours ago' },
                  { name: 'Priya S.', amount: '₹1,000', time: '1 day ago' },
                ].map((supporter, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <Users size={14} className="text-gray-400" />
                      </div>
                      <span className="font-semibold text-gray-700">{supporter.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#16836A]">{supporter.amount}</p>
                      <p className="text-[10px] text-gray-400">{supporter.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────── */}
      {/* MOBILE VIEW (< lg) Layout */}
      {/* ──────────────────────────────────────────────────────── */}
      <div className="block lg:hidden space-y-3 px-2">
        {/* Main Video/Cover card */}
        <div
          className={`relative overflow-hidden shadow-sm ${activeDetails.videoUrl ? 'h-[calc(78vh-64px)] rounded-[16px_16px_8px_8px] bg-black -mx-2 mt-3' : 'h-[240px] rounded-[16px_16px_8px_8px] bg-black -mx-2 mt-3'}`}
        >
          {activeDetails.videoUrl ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="block h-full w-full object-cover object-[center_top]"
            >
              <source src={activeDetails.videoUrl} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={campaign.image}
              alt="Campaign"
              fill
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          {/* Header badges */}
          <div className="absolute top-0 left-0 right-0 flex justify-between items-start z-10">
            <span className="bg-[#16836A] text-white font-extrabold text-[11px] px-4 py-2 rounded-br-xl shadow uppercase tracking-wider">
              VERIFIED
            </span>
            <div className="flex items-center gap-2">
              <span className="bg-[#DC2626] text-white font-extrabold text-[11px] px-4 py-2 rounded-bl-xl shadow uppercase tracking-wider">
                URGENT
              </span>
              <button
                aria-label="Share campaign"
                title="Share campaign"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: campaign.title,
                      text: `Help support ${campaign.title}`,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  }
                }}
                className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/30 transition"
              >
                <Share2 size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Short info, progress, donate card */}
        <div
          className="bg-white p-5 border border-[#E2E8F0] shadow-sm space-y-4 rounded-[8px_8px_16px_16px] -mx-2 mb-3"
        >
          <p className="text-xs text-gray-400 text-center">
            {campaign.id === 'urgent-medical-emergency' ? 'Before he crawls, SMA 1 steals his strength!' : campaign.title}
          </p>

          <h3 className="text-base font-extrabold text-center text-gray-900 leading-tight">
            {campaign.title}
          </h3>

          <p className="text-xs text-gray-400 text-center">
            by {activeDetails.campaignerName}
          </p>

          <div className="flex justify-between items-center text-xs font-bold text-[#16836A]">
            <span>{campaign.raised} Raised</span>
            <span>{campaign.percent}</span>
          </div>

          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <progress
              className="h-1.5 w-full overflow-hidden rounded-full [&::-webkit-progress-bar]:bg-gray-100 [&::-webkit-progress-value]:bg-[#16836A] [&::-moz-progress-bar]:bg-[#16836A]"
              value={Math.min(100, parseInt(campaign.percent, 10) || 0)}
              max={100}
            />
          </div>

          <button onClick={handleDonateClick} className="w-full bg-[#E87B35] hover:bg-[#FB923C] text-white font-bold text-base py-3 rounded-full shadow-md transition-all active:scale-[0.98]">
            DONATE
          </button>
        </div>

        {/* Story Card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#E2E8F0] space-y-4">
          <h3 className="font-extrabold text-sm text-gray-900 uppercase tracking-wide">Story</h3>
          <p className="italic font-bold text-xs text-[var(--color-secondary)] bg-[#FEF9E7] p-3 rounded-lg border border-[#FEF3C7] leading-relaxed">
            "{activeDetails.storyQuote}" - {activeDetails.storyQuoteAuthor}
          </p>

          <div className={`text-xs text-gray-600 leading-relaxed space-y-3 transition-all duration-300 relative ${storyExpanded ? '' : 'max-h-32 overflow-hidden'}`}>
            {activeDetails.storyParagraphs.map((para, pIdx) => (
              <p key={pIdx}>{para}</p>
            ))}
            {!storyExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
            )}
          </div>

          <button
            onClick={() => setStoryExpanded(!storyExpanded)}
            className="mx-auto block text-xs font-bold text-[#16836A] hover:underline"
          >
            {storyExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>

        {/* Documents Card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#E2E8F0] space-y-4">
          <h3 className="font-extrabold text-sm text-gray-900 uppercase tracking-wide">Documents</h3>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {activeDetails.documents.map((doc, idx) => (
              <button
                key={idx}
                onClick={() => setActiveDocIndex(idx)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-xs font-semibold border transition-all ${activeDocIndex === idx
                  ? 'bg-[#16836A] text-white border-[#16836A]'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-[#16836A]'
                  }`}
              >
                {doc.label}
              </button>
            ))}
          </div>
        </div>

        {/* Updates Card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#E2E8F0] space-y-3">
          <h3 className="font-extrabold text-sm text-gray-900 uppercase tracking-wide">
            Latest Updates ({activeDetails.updates.length})
          </h3>
          <div className="border-t pt-3 space-y-2">
            <p className="text-xs font-bold text-gray-700">#1 ({activeDetails.updates[0].date}) <span className="font-normal text-gray-400 italic">- From {activeDetails.updates[0].author}</span></p>
            <p className={`text-xs text-gray-500 leading-relaxed ${updatesExpanded ? '' : 'line-clamp-4'}`}>
              {activeDetails.updates[0].content}
            </p>
          </div>

          <button
            onClick={() => setUpdatesExpanded(!updatesExpanded)}
            className="mx-auto block border border-[#16836A] text-[#16836A] font-bold text-xs px-5 py-1.5 rounded-full bg-white"
          >
            {updatesExpanded ? 'Show Less' : 'Read More'}
          </button>
        </div>

        {/* Declarations Card */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-gray-100 space-y-4">
          <div className={`space-y-4 transition-all duration-300 ${declarationExpanded ? '' : 'max-h-40 overflow-hidden relative'}`}>
            <div>
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">NO INFLUENCE DECLARATION</h4>
              <p className="text-[10px] text-gray-400 leading-relaxed italic">
                Sanjivani does not influence / control the decision of the campaigner / patient with respect to choice of hospital / doctor / healthcare treatment.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">TREATMENT COST ESTIMATES</h4>
              <p className="text-[10px] text-gray-400 leading-relaxed italic">
                Sanjivani has no control over the cost estimates provided by hospitals / clinics.
              </p>
            </div>
            {!declarationExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-slate-50 to-transparent" />
            )}
          </div>

          <button
            onClick={() => setDeclarationExpanded(!declarationExpanded)}
            className="mx-auto block text-xs font-bold text-[#16836A]"
          >
            {declarationExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>

      {/* Donation Popup */}
      <DonationPopup
        isOpen={showDonationPopup}
        onClose={() => setShowDonationPopup(false)}
        onDonate={handleDonate}
      />
    </div>
  );
}
