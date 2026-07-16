'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useRef, useState, useEffect, useCallback } from 'react';
import {
  ArrowLeft,
  BadgeCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
  Mail,
  MapPin,
  Pause,
  Play,
  Share2,
  ShieldCheck,
  Users,
  Volume2,
  VolumeX,
  X,
  ZoomIn,
} from 'lucide-react';
import { campaigns as campaignsData } from '../../data/campaigns';
import type { Campaign, CampaignDonation } from '../../data/campaigns';

/* Helper: format INR */
const fmt = (v: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(v);

/* Helper: success chime sound */
const playSuccessSound = () => {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const chime = (freq: number, time: number, dur: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, time);
      gain.gain.setValueAtTime(0.15, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + dur);
      osc.start(time);
      osc.stop(time + dur);
    };
    const now = ctx.currentTime;
    chime(523.25, now, 0.4);
    chime(783.99, now + 0.15, 0.6);
  } catch (_) { /* ignore audio errors */ }
};

/* ==============================================
   TRANSACTION POPUP — Amount selection
   ============================================== */
function TransactionPopup({
  isOpen,
  campaignTitle,
  onClose,
  onDonate,
}: {
  isOpen: boolean;
  campaignTitle: string;
  onClose: () => void;
  onDonate: (amount: number, isMonthly: boolean) => void;
}) {
  const [tab, setTab] = useState<'once' | 'monthly'>('once');
  const [selectedAmount, setSelectedAmount] = useState(9999);
  const [customAmount, setCustomAmount] = useState('9999');

  if (!isOpen) return null;

  const handleDonate = () => {
    const amount = parseInt(customAmount) || selectedAmount;
    if (amount < 10) return;
    onDonate(amount, tab === 'monthly');
  };

  return (
    <>
      <div onClick={onClose} className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm" />
      <div className="fixed bottom-0 left-0 right-0 z-[60] flex max-h-[90vh] w-full flex-col overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:max-w-md sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-3xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white p-4">
          <h3 className="text-lg font-bold text-slate-900">Transaction Details</h3>
          <button onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200" aria-label="Close">
            <X size={18} />
          </button>
        </div>
        <div className="p-5">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Donating to: <span className="text-slate-700">{campaignTitle}</span>
          </p>
          <div className="mb-5 flex items-center justify-center">
            <div
              onClick={() => setTab(tab === 'monthly' ? 'once' : 'monthly')}
              className="relative flex h-9 w-[100px] cursor-pointer items-center justify-center rounded-full bg-[#E87B35] p-1 shadow-inner select-none"
            >
              <div className={`absolute z-10 h-7 w-7 rounded-full bg-white shadow-md transition-all duration-200 ${tab === 'monthly' ? 'translate-x-8' : '-translate-x-8'}`} />
              <span className="relative z-0 text-xs font-semibold text-white">{tab === 'monthly' ? 'Monthly' : 'Once'}</span>
            </div>
          </div>
          <div className="h-px bg-slate-100" />
          <p className="mt-4 mb-3 text-sm font-bold text-slate-900">CHOOSE AMOUNT</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {[1800, 4000, 7500, 9999].map((amt) => (
              <button
                key={amt}
                onClick={() => { setSelectedAmount(amt); setCustomAmount(amt.toString()); }}
                className={`cursor-pointer rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                  selectedAmount === amt
                    ? 'border-2 border-[#16836A] bg-[#16836A] text-white shadow-md'
                    : 'border border-slate-200 bg-white text-slate-700 hover:border-[#16836A]/40'
                }`}
              >
                &#8377;{amt.toLocaleString('en-IN')}
              </button>
            ))}
          </div>
          <div className="mb-6 flex gap-2">
            <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm font-semibold text-slate-500">&#8377; INR</div>
            <input
              type="number"
              aria-label="Custom donation amount"
              placeholder="Enter amount"
              value={customAmount}
              onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(parseInt(e.target.value) || 0); }}
              className="flex-1 rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition focus:border-[#E87B35]"
            />
          </div>
          <button onClick={handleDonate} className="w-full rounded-full bg-[#E87B35] py-4 text-base font-extrabold text-white shadow-lg transition-all hover:bg-[#D96B26] active:scale-[0.98]">
            DONATE &#8377;{(parseInt(customAmount) || selectedAmount).toLocaleString('en-IN')}
          </button>
          <p className="mt-4 text-center text-[11px] leading-relaxed text-slate-400">
            By proceeding, you agree to Sanjivani&apos;s{' '}
            <span className="font-semibold text-[#16836A]">Terms of Use</span>,{' '}
            <span className="font-semibold text-[#16836A]">Privacy Policy</span>, and{' '}
            <span className="font-semibold text-[#16836A]">Cookie Policy</span>
          </p>
        </div>
      </div>
    </>
  );
}

/* ==============================================
   PAYMENT SIMULATOR — Processing → Success
   ============================================== */
function PaymentSimulatorModal({ amount, onComplete }: { amount: number; onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 1200);
    const t2 = setTimeout(() => setStep(2), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    if (step === 2) {
      playSuccessSound();
      const t3 = setTimeout(onComplete, 2000);
      return () => clearTimeout(t3);
    }
  }, [step, onComplete]);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-md">
      <div className="mx-4 w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-2xl">
        {step < 2 ? (
          <div className="flex flex-col items-center py-6">
            <div className="relative mb-6 h-16 w-16">
              <div className="absolute inset-0 rounded-full border-4 border-[#E87B35]/20" />
              <div className="absolute inset-0 animate-spin rounded-full border-4 border-[#E87B35] border-t-transparent" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-slate-900">Processing Donation</h3>
            <p className="px-4 text-sm text-slate-500">
              {step === 0 ? 'Connecting to secure Sanjivani gateway...' : `Authorizing donation of ₹${amount.toLocaleString('en-IN')}...`}
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center py-6">
            <div className="mb-6 flex h-16 w-16 animate-bounce items-center justify-center rounded-full bg-[#16836A] text-white shadow-md">
              <Check size={32} strokeWidth={3} />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-slate-900">Thank You!</h3>
            <p className="mb-4 text-sm text-slate-600">
              Donation of <strong className="text-[#16836A]">&#8377;{amount.toLocaleString('en-IN')}</strong> was successful.
            </p>
            <p className="text-xs text-slate-400">Updating campaign data...</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ==============================================
   FLOATING DONATE BUTTON
   ============================================== */
function FloatingDonateBar({ onDonateClick }: { title: string; onDonateClick: () => void }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:bottom-6 md:right-6 md:left-auto md:translate-x-0 z-50">
      <button
        onClick={onDonateClick}
        className="relative overflow-hidden rounded-full bg-gradient-to-r from-[#FF7A00] via-[#E87B35] to-[#FF9E46] px-16 md:px-6 py-3 text-center text-sm font-black tracking-wider text-white shadow-[0_4px_20px_rgba(232,123,53,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_25px_rgba(232,123,53,0.7)] active:scale-95 opacity-100"
      >
        <span className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        DONATE
      </button>
    </div>
  );
}

/* ==============================================
   BLANK DOCUMENT TEMPLATE — SVG placeholder
   ============================================== */
function BlankDocPlaceholder({ index }: { index: number }) {
  const labels = ['Hospital Bill', 'Medical Report', 'Prescription'];
  const label = labels[index] ?? `Document ${index + 1}`;
  return (
    <div className="flex flex-col items-center justify-between rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-5" style={{ minHeight: 200 }}>
      {/* Paper icon */}
      <svg viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-20 opacity-40">
        <rect x="4" y="4" width="72" height="88" rx="6" fill="white" stroke="#CBD5E1" strokeWidth="2" />
        <path d="M52 4v20h20" stroke="#CBD5E1" strokeWidth="2" fill="none" />
        <line x1="16" y1="42" x2="64" y2="42" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="54" x2="64" y2="54" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="66" x2="48" y2="66" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="78" x2="56" y2="78" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <div className="mt-3 text-center">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</p>
        <p className="mt-1 text-[10px] text-slate-300 font-medium">Will be uploaded soon</p>
      </div>
    </div>
  );
}

/* ==============================================
   DOCUMENTS SECTION
   ============================================== */
function DocumentsSection({ documents }: { documents: string[] }) {
  const [activeDoc, setActiveDoc] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const hasRealDocs = documents && documents.length > 0;

  // Show placeholder section when no real documents
  if (!hasRealDocs) {
    return (
      <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        {/* Header */}
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
            <FileText size={16} className="text-emerald-600" />
          </div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
            Documents &amp; Reports
          </h3>
          <span className="ml-auto rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold text-amber-600 border border-amber-200">
            PENDING
          </span>
        </div>

        {/* Pending notice */}
        <div className="mb-5 flex items-start gap-2 rounded-xl bg-amber-50 border border-amber-100 px-3 py-2.5">
          <ShieldCheck size={14} className="text-amber-500 shrink-0 mt-0.5" />
          <p className="text-xs font-medium text-amber-700">
            Medical documents are being collected and will be verified by the Sanjivani team shortly.
          </p>
        </div>

        {/* Placeholder doc cards */}
        <div className="grid grid-cols-3 gap-3">
          <BlankDocPlaceholder index={0} />
          <BlankDocPlaceholder index={1} />
          <BlankDocPlaceholder index={2} />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      {/* Header */}
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
          <FileText size={16} className="text-emerald-600" />
        </div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
          Documents &amp; Reports
        </h3>
        <span className="ml-auto rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-500">
          {documents.length} FILE{documents.length > 1 ? 'S' : ''}
        </span>
      </div>

      {/* Verified badge */}
      <div className="mb-4 flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2">
        <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
        <p className="text-xs font-semibold text-emerald-700">
          All documents have been verified by the Sanjivani team
        </p>
      </div>

      {/* Main document preview */}
      <div
        className="group relative overflow-hidden rounded-2xl bg-slate-100 shadow-inner cursor-zoom-in"
        onClick={() => setLightboxOpen(true)}
      >
        <div className="relative w-full" style={{ paddingBottom: '60%' }}>
          <Image
            src={documents[activeDoc]}
            alt={`Document ${activeDoc + 1}`}
            fill
            className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>
        {/* Zoom hint */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ZoomIn size={12} /> View full
        </div>
      </div>

      {/* Thumbnail strip */}
      {documents.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {documents.map((src, i) => (
            <button
              key={i}
              onClick={() => setActiveDoc(i)}
              className={`relative shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                activeDoc === i
                  ? 'border-[#16836A] shadow-md scale-105'
                  : 'border-slate-200 hover:border-slate-400'
              }`}
              style={{ width: 72, height: 56 }}
              aria-label={`Document ${i + 1}`}
            >
              <Image src={src} alt={`Thumb ${i + 1}`} fill className="object-cover" sizes="72px" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <>
          <div
            className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-md"
            onClick={() => setLightboxOpen(false)}
          />
          <div className="fixed inset-0 z-[81] flex items-center justify-center p-4">
            <div className="relative w-full max-w-3xl">
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-10 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 transition"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <div className="relative w-full rounded-2xl overflow-hidden bg-slate-900" style={{ paddingBottom: '70%' }}>
                <Image
                  src={documents[activeDoc]}
                  alt={`Document ${activeDoc + 1} full view`}
                  fill
                  className="object-contain p-4"
                  sizes="90vw"
                />
              </div>
              {/* Lightbox navigation */}
              {documents.length > 1 && (
                <div className="mt-4 flex items-center justify-center gap-3">
                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveDoc((p) => (p - 1 + documents.length) % documents.length); }}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 transition"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <span className="text-xs font-semibold text-white">{activeDoc + 1} / {documents.length}</span>
                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveDoc((p) => (p + 1) % documents.length); }}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 transition"
                    aria-label="Next"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ==============================================
   MAIN PAGE
   ============================================== */
export default function CampaignPage() {
  const params = useParams();
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [galleryIdx, setGalleryIdx] = useState(0);

  const [showTransaction, setShowTransaction] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [donationAmount, setDonationAmount] = useState(0);
  const [campaignState, setCampaignState] = useState<Campaign | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const id = typeof params?.id === 'string' ? params.id : Array.isArray(params?.id) ? params.id[0] : '';
  const baseCampaign = campaignsData.find((c) => c.id === id);

  useEffect(() => {
    if (baseCampaign && !campaignState) setCampaignState({ ...baseCampaign });
  }, [baseCampaign, campaignState]);

  const campaign = campaignState || baseCampaign;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause(); else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const openDonation = () => setShowTransaction(true);

  const handleDonate = (amount: number, _isMonthly: boolean) => {
    setDonationAmount(amount);
    setShowTransaction(false);
    setShowPayment(true);
  };

  const handlePaymentSuccess = useCallback(() => {
    setShowPayment(false);
    setCampaignState((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        raisedAmount: prev.raisedAmount + donationAmount,
        supporters: prev.supporters + 1,
        donations: [{ initials: 'YO', name: 'You', amount: donationAmount }, ...prev.donations],
      };
    });
    setDonationAmount(0);
  }, [donationAmount]);

  if (!campaign) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F6F8FB] px-4">
        <div className="rounded-2xl border border-slate-200 bg-white px-8 py-12 text-center shadow-lg">
          <p className="text-2xl font-black text-slate-900">Campaign not found</p>
          <p className="mt-2 text-sm text-slate-500">This fundraiser does not exist or has been removed.</p>
          <Link href="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-bold text-white">
            <ArrowLeft size={16} /> Back to home
          </Link>
        </div>
      </div>
    );
  }

  const hasVideo = !!campaign.videoUrl;
  const gallery = campaign.gallery ?? [campaign.image];
  const progress = Math.min(100, Math.round((campaign.raisedAmount / campaign.goalAmount) * 100));

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20 text-slate-900">

      {/* Top Navigation */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <ArrowLeft size={16} /> Back
          </button>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
              <ShieldCheck size={12} /> {campaign.category}
            </span>
            {campaign.urgency === 'Urgent' && (
              <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-bold text-rose-600">URGENT</span>
            )}
          </div>
        </div>
      </div>

      {/* Title ABOVE the Reel */}
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-2xl border border-[#FFE2D1] bg-[#FFF0E6] px-3 py-1.5">
          <span className="h-1.5 w-1.5 animate-ping rounded-full bg-[#E87B35]" />
          <span className="text-xs font-bold text-[#E87B35]">
            {campaign.urgency === 'Urgent' ? 'Emergency ' : ''}{campaign.category} Campaign
          </span>
        </div>
        <h1 className="text-2xl font-black leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
          {campaign.title}
        </h1>
        <div className="mt-3 flex items-center gap-2.5 text-sm font-medium text-slate-600">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-sm font-bold text-emerald-700">S</div>
          <span>Verified Sanjivani Beneficiary</span>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="mx-auto mt-6 max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">

          {/* LEFT COLUMN */}
          <div className="space-y-5">

            {/* 1. Video Reel / Image Gallery */}
            <div className="px-1 sm:px-2">
              {hasVideo ? (
                <div className="relative mx-auto w-full max-w-[340px] aspect-[9/16] bg-black rounded-[28px] overflow-hidden shadow-2xl border-4 border-slate-900">
                  <video
                    ref={videoRef}
                    src={campaign.videoUrl}
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                    onClick={togglePlay}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                    <button onClick={togglePlay} className="flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-md hover:bg-black/75 transition" aria-label={isPlaying ? 'Pause' : 'Play'}>
                      {isPlaying ? <Pause size={18} /> : <Play size={18} className="translate-x-0.5" />}
                    </button>
                    <button onClick={toggleMute} className="flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-md hover:bg-black/75 transition" aria-label={isMuted ? 'Unmute' : 'Mute'}>
                      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                  </div>
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              ) : (
                <div className="relative mx-auto aspect-video w-full max-w-xl overflow-hidden rounded-2xl bg-slate-900 shadow-lg">
                  <Image src={gallery[galleryIdx]} alt={campaign.title} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 600px" />
                  {gallery.length > 1 && (
                    <>
                      <button onClick={() => setGalleryIdx((p) => (p - 1 + gallery.length) % gallery.length)} className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-md" aria-label="Previous image">
                        <ChevronLeft size={22} className="text-slate-700" />
                      </button>
                      <button onClick={() => setGalleryIdx((p) => (p + 1) % gallery.length)} className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-md" aria-label="Next image">
                        <ChevronRight size={22} className="text-slate-700" />
                      </button>
                    </>
                  )}
                  <div className="absolute left-4 top-4 flex gap-2 z-10">
                    {campaign.badge && (
                      <span className="rounded-md bg-[#16836A] px-3 py-1 text-xs font-bold text-white shadow">TAX BENEFITS ✓</span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* 2. Mobile progress + donate (hidden on desktop) */}
            <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-xl sm:p-6 lg:hidden">
              <div className="flex items-end justify-between mb-2">
                <div>
                  <span className="text-xl font-black text-[#16836A]">{fmt(campaign.raisedAmount)}</span>
                  <span className="block text-xs text-slate-500">raised of {fmt(campaign.goalAmount)}</span>
                </div>
                <span className="text-sm font-bold text-slate-700">{progress}%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
                <div className="h-full rounded-full bg-[#16836A] transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
              <div className="mt-3 flex justify-between text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1"><Users size={14} /> {campaign.supporters} Supporters</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {campaign.daysLeft} Days Left</span>
              </div>
              <button onClick={openDonation} className="mt-4 w-full rounded-full bg-[#E87B35] py-3.5 text-center font-extrabold text-white shadow-lg transition hover:bg-[#D96B26] active:scale-[0.98]">
                DONATE NOW
                <span className="block text-[10px] font-bold tracking-wider opacity-80">(INDIAN TAX BENEFITS AVAILABLE)</span>
              </button>
            </div>

            {/* 3. Campaign Story */}
            <div className="rounded-[24px] border border-slate-200/50 bg-[#F1F5F9]/80 p-5 shadow-inner backdrop-blur-md sm:p-6">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-800">Campaign Story</h3>
              <div className="space-y-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
                {campaign.story.split('\n\n').map((p, i) => (
                  <p key={i} className={i === 0 ? 'italic' : ''}>{p}</p>
                ))}
              </div>
            </div>

            {/* 4. Latest Updates */}
            {campaign.updates.length > 0 && (
              <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-800">Latest Updates</h3>
                <div className="space-y-3">
                  {campaign.updates.map((u, i) => (
                    <div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span className="font-semibold">{u.date}</span>
                        <span>{u.author}</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-700">{u.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. Documents Section */}
            <DocumentsSection documents={campaign.documents} />

            {/* 6. Campaigner & Beneficiary Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600">
                    {campaign.campaignerName.split(' ').map(w => w[0]).join('').slice(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Campaigner Details</span>
                      <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                        <BadgeCheck size={10} /> VERIFIED
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-bold text-slate-900">{campaign.campaignerName}</p>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-500"><MapPin size={11} /> {campaign.campaignerLocation}</p>
                    <button className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#E87B35] hover:underline">
                      <Mail size={11} /> Contact
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-50 text-sm font-bold text-orange-600">
                    {campaign.beneficiaryName.split(' ').map(w => w[0]).join('').slice(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Beneficiary Details</span>
                      <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                        <BadgeCheck size={10} /> VERIFIED
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-bold text-slate-900">{campaign.beneficiaryName}</p>
                    <p className="text-xs text-slate-500">{campaign.beneficiaryRelation}</p>
                    <p className="mt-0.5 text-xs text-slate-500">{campaign.beneficiaryStatus}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 7. Declaration Section */}
            <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6 mt-5">
              <div className={`relative overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-max' : 'max-h-[220px]'}`}>
                <div className="space-y-4 text-xs sm:text-[13px] text-slate-500 italic leading-relaxed">
                  <div>
                    <h4 className="font-bold text-slate-700 uppercase not-italic mb-1">NO INFLUENCE DECLARATION</h4>
                    <p>
                      Sanjivani does not influence / control the decision of the campaigner / patient with respect to choice of hospital / doctor / healthcare treatment or the cost / estimate of any such treatment. Such decision is in entirety of campaigner / patient / beneficiary and / or their family members without any interference and / or say of Sanjivani. Sanjivani is absolved of any liability in respect thereof.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-700 uppercase not-italic mb-1">LANGUAGE OF STORY/STATEMENT DECLARATION</h4>
                    <p>
                      The language, story, facts mentioned on this fundraising page is in entirety statements / opinions / thoughts shared by the campaigner / beneficiary or persons authorised on their behalf and shall not be construed as statement / thoughts / opinions of or on behalf of Sanjivani.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-700 uppercase not-italic mb-1">TREATMENT COST ESTIMATES</h4>
                    <p>
                      Sanjivani has no control over the cost estimates provided by hospitals / clinics / pharmaceutical companies etc. The cost estimates vary depending on the city and / or hospital where the patient is under treatment, professional fees of the treating doctors, drugs / medicines / therapies chosen for treatment by patient or patient’s family at their own discretion including but not limited to unique medical conditions / circumstances pertaining to each patient.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-700 uppercase not-italic mb-1">UTILIZATION OF FUNDS</h4>
                    <p>
                      In the rare scenario of surplus funds remaining within the fundraising campaign due to any of the following circumstances: i) Completion of the Patient&apos;s treatment; ii) Receipt of requisite funding for the Patient from alternative sources; iii) Eligibility of the Patient for free treatment under any scheme or the receipt of free treatment by other means; iv) Demise of the Patient; v) Fulfilment of the fundraising campaign&apos;s objectives; vi) Termination of the fundraising campaign for any reason; vii) Reduction in the cost of the treatment,
                    </p>
                    <p className="mt-2">
                      Sanjivani shall have the discretion to use such surplus funds to allocate to i) other patients on Sanjivani for their life-saving treatment and/or donors to provide health benefits with object to maximize social impact; and/or ii) donors of the fundraising campaign at the sole discretion of Sanjivani may be offered the option to claim a pro-rata refund of surplus funds.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-700 uppercase not-italic mb-1">PATIENT DEATH UPDATE</h4>
                    <p>
                      Upon the death of the patient, the Campaigner / close relative / POC on behalf of the patient shall be duty bound to inform Sanjivani immediately within two (2) hours of such occurrence and turn off the donations tab (through the internal access granted) on the campaign on Sanjivani Platform in order to stop fundraising on the campaign. In the event Campaigner or authorised/designated POC on behalf of the patient fails to do so and campaign continues raising funds due to such non-information/non action, the Campaigner or authorised/designated POC on behalf of the patient shall be personally liable any consequences thereof; further, Sanjivani shall be disclaimed of all the liabilities occurring with respect to such post death fundraising and the such liability in entirety shall accrue on Campaigner or authorised/designated POC on behalf of the patient. In the event of death of the patient, Sanjivani&apos;s Patient Death Policy at Terms Of Use shall apply.
                    </p>
                  </div>
                </div>
                {!isExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                )}
              </div>
              <div className="mt-4 flex justify-center border-t border-slate-100 pt-3">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-sm font-bold text-[#16836A] hover:text-[#0f5f4d] transition-colors focus:outline-none"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>

          </div>
          {/* END LEFT COLUMN */}

          {/* RIGHT COLUMN - desktop sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-4 space-y-5">

              <div id="donate-section" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#16836A]" />
                  <span className="text-2xl font-black text-[#16836A]">{progress}%</span>
                </div>
                <p className="text-xs text-slate-500">funded in {campaign.daysLeft} days</p>

                <p className="mt-4 text-xl">
                  <span className="font-black text-slate-900">{fmt(campaign.raisedAmount)} Raised</span>{' '}
                  <span className="text-sm font-medium text-slate-500">of {fmt(campaign.goalAmount)}</span>
                </p>
                <p className="mt-1 text-sm font-semibold text-[#E87B35]">{campaign.supporters} Donors</p>

                <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-[#16836A] transition-all duration-700" style={{ width: `${progress}%` }} />
                </div>

                <p className="mt-4 flex items-center gap-1.5 text-xs text-slate-500">
                  Funds will be transferred for patient&apos;s treatment
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-slate-300 text-[10px] text-slate-400">i</span>
                </p>

                <button onClick={openDonation} className="mt-4 w-full rounded-full bg-[#E87B35] py-3.5 text-center font-extrabold text-white shadow-md transition hover:bg-[#D96B26] active:scale-[0.98]">
                  DONATE NOW
                  <span className="block text-[10px] font-bold tracking-wider opacity-80">(INDIAN TAX BENEFITS AVAILABLE)</span>
                </button>

                <p className="mt-4 text-center text-xs text-slate-500">Every social media share can bring &#8377;5,000</p>

                <button className="mt-3 w-full rounded-full bg-[#1877F2] py-3 text-center text-sm font-bold text-white transition hover:bg-[#1565D8]">
                  SHARE ON FACEBOOK
                </button>

                <div className="mt-4 flex items-center justify-center gap-3">
                  <button className="flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white hover:opacity-90 transition">
                    SHARE ON <span className="font-extrabold">WhatsApp</span>
                  </button>
                  <button className="flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 transition" aria-label="Share">
                    <Share2 size={14} />
                  </button>
                </div>
              </div>

              {/* Shares count */}
              <div className="flex items-center justify-end gap-2">
                <div className="flex h-12 w-12 flex-col items-center justify-center rounded-full bg-[#16836A] text-white shadow-md">
                  <Share2 size={16} />
                </div>
                <div className="text-right">
                  <p className="text-lg font-black text-slate-900">{campaign.sharesCount}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">SHARES</p>
                </div>
              </div>

            </div>
          </div>
          {/* END RIGHT COLUMN */}

        </div>
      </div>

      {/* Sticky floating donate button */}
      <FloatingDonateBar title={campaign.title} onDonateClick={openDonation} />

      {/* Transaction Popup */}
      <TransactionPopup
        isOpen={showTransaction}
        campaignTitle={campaign.title}
        onClose={() => setShowTransaction(false)}
        onDonate={handleDonate}
      />

      {/* Payment Processing Modal */}
      {showPayment && (
        <PaymentSimulatorModal
          amount={donationAmount}
          onComplete={handlePaymentSuccess}
        />
      )}
    </div>
  );
}