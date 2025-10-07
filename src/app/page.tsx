import Download from '@/app/components/Download';
import FaqSection from '@/app/components/FaqSection';
import Footer from '@/app/components/Footer';
import Popular from '@/app/components/Popular';
import Vehicle from '@/app/components/vehicle';
import ContactSection from '@/app/components/ContactSection';
import Explore from '@/app/components/Explore';
import Appbar from "./components/screens/Appbar";
import Categories from "./components/screens/Categories";
import Donation from '@/app/components/Donation';
import OurJourney from '@/app/components/OurJourney';
import Portfo from '@/app/components/Portfo';
import ChatBot from '@/app/components/ChatBot';
import Testimonial from '@/app/components/Testimonial';
import SDGGrid from '@/app/components/SDGGrid';
import Rank from '@/app/components/Rank';

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
        {/* <Vehicle />     */}
        {/* <Popular /> */}
        <SDGGrid />
        <ContactSection />
        <Explore />
        <Testimonial />
        <Download />
        <FaqSection />
        <ChatBot />
        <Footer />
      </div>
  )
}
