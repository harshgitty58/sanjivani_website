'use client';

import { useParams } from 'next/navigation';
import { campaigns } from '@/app/data/campaigns';
import DonationCampaign from '@/app/urgent/DonationCampaign';
import DonationStoryPage from '@/app/urgent/DonationStoryPage';
import DocumentsGallery from '@/app/urgent/DocumentsGallery';
import CommentBox from '@/app/urgent/CommentBox';
// import DonationPopup from '@/app/urgent/DonationPopup';
// import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Banner from '@/app/urgent/Banner';
import WaiverNotice from '@/app/urgent/WaiverNotice';

export default function CampaignPage() {
  const { id } = useParams();
  const campaign = campaigns.find((c) => c.id === id);

  if (!campaign) {
    return <div className="p-10 text-red-500 text-center">Campaign not found.</div>;
  }

  return (
   <>
    {/* <Navbar /> */}
    <div className="bg-green-100 min-h-screen">
      {/* <Banner /> */}
      {/* <WaiverNotice /> */}
      <DonationCampaign
        id={campaign.id}
        title={campaign.title}
        image={campaign.image}
        fund={campaign.fund}
      />
      <br />
      <DonationStoryPage />
      <DocumentsGallery campaignId={campaign.id} />
      <CommentBox />
      <br />
    </div>
    <Footer />
    {/* <DonationPopup id={id as string} /> */}
  </>
  );
}
