'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Download from '@/app/components/Download';
import FaqSection from '@/app/components/FaqSection';
import Footer from '@/app/components/Footer';
// import Popular from '@/app/components/Popular';
// import Vehicle from '@/app/components/vehicle';
import VideoTravelBlogs from '@/app/components/VideoTravelBlogs';
import EmergencyART from '@/app/components/Emergency-ART';
import Explore from '@/app/components/Explore';
//import Businesspartner from '@/app/components/Businesspartner';
import Appbar from "./components/screens/Appbar";
import Categories from "./components/screens/Categories";
import Donation from '@/app/components/Donation';
import OurJourney from '@/app/components/OurJourney';
import Portfo from '@/app/components/Portfo';
import ChatBot from '@/app/components/ChatBot';
import Reviews from '@/app/components/Reviews';
import Testimonial from '@/app/components/Testimonial';
import SDGGrid from '@/app/components/SDGGrid';
import OutingPlanner from '@/app/components/OutingPlanner';
import Rank from '@/app/components/Rank';
// import SocialMenu from '@/app/components/SocialMenu';
import MapLandingPage from '@/app/components/MapLandingPage';

function MainHomePage() {
  return (
    <div className="relative z-10 pt-11 overflow-x-hidden">
      <Appbar />
      <div className="w-full h-[280px] sm:h-[450px] md:h-[600px]">
        <iframe
          src="/ngo-banner-next/assets/menu-below-slider.html"
          title="NGO Banner Next"
          className="w-full h-full border-0"
        />
      </div>
      <OurJourney />
      <Rank />
      <Portfo />
      <Donation />
      <VideoTravelBlogs />
      {/* <Businesspartner /> */}
      {/* <Vehicle />     */}
      {/* <Popular /> */}
      <EmergencyART />
      <SDGGrid />
      <OutingPlanner />
      <Explore />
      <Testimonial />
      <Reviews />
      <FaqSection />
      <Download />
      <ChatBot />
      {/* <SocialMenu /> */}
      <Footer />
    </div>
  );
}

function HomeContent() {
  const searchParams = useSearchParams();
  const state = searchParams ? searchParams.get('state') : null;

  if (state) {
    return <MainHomePage />;
  }

  return <MapLandingPage />;
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-[#F1F5F9]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent" />
      </div>
    }>
      <HomeContent />
    </Suspense>
  );
}
