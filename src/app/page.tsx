import Download from '@/app/components/Download';
import FaqSection from '@/app/components/FaqSection';
import Footer from '@/app/components/Footer';
import Popular from '@/app/components/Popular';
import Vehicle from '@/app/components/vehicle';
import VideoTravelBlogs from '@/app/components/VideoTravelBlogs';
import EmergencyART from '@/app/components/Emergency-ART';
import ContactSection from '@/app/components/ContactSection';
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
import Rank from '@/app/components/Rank';
import SocialMenu from '@/app/components/SocialMenu';

export default function Home() {
  return (
      <div className="relative z-10 pt-11">
        <Appbar />
        <div className="w-full h-[600px] my-8">
          <iframe
            src="/ngo-banner-next/assets/menu-below-slider.html"
            title="NGO Banner Next"
            className="w-full h-full border-0"
          />   
        </div>
        {/* <Categories /> */}
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
        <ContactSection />
        <Explore />
        <Testimonial />
        <Reviews />
        <FaqSection />
        <Download />
        <ChatBot />
        <SocialMenu />
        <Footer />
      </div>
  )
}
