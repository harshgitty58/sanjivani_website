'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface DocumentsGalleryProps {
  campaignId: string;
}

export default function DocumentsGallery({ campaignId }: DocumentsGalleryProps) {
  const [documents, setDocuments] = useState<string[]>([]);
  const [mainImage, setMainImage] = useState<string>('');
  const [showDonateBar, setShowDonateBar] = useState(false);

  useEffect(() => {
    const fetchDocuments = async () => {
      const data = await getDocumentsForCampaign(campaignId);
      setDocuments(data);
      setMainImage(data[0]);
    };

    fetchDocuments();

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowDonateBar(true);
      } else {
        setShowDonateBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [campaignId]);

  return (
    <div className="w-full flex justify-center px-2 sm:px-4 pt-4 pb-10">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Documents</h2>

        {mainImage && (
          <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 m-4 sm:m-8 md:m-16">
            <Image
              src={mainImage}
              alt="Main Document"
              width={1000}
              height={400}
              className="rounded-md w-full h-auto max-h-[250px] sm:max-h-[400px] object-contain transition-transform duration-200 hover:scale-[1.01]"
            />
          </div>
        )}

        <div className="flex gap-2 sm:gap-3 mt-4 overflow-x-auto scrollbar-hide">
          {documents.map((src, i) => (
            <div key={i} className="flex-shrink-0">
              <Image
                src={src}
                alt={`Thumbnail ${i + 1}`}
                width={100}
                height={100}
                onClick={() => setMainImage(src)}
                className={`rounded-md cursor-pointer border-2 transition-transform duration-200 object-contain max-h-[60px] sm:max-h-[80px] hover:scale-105 ${
                  mainImage === src ? 'border-green-500' : 'border-gray-300'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
 
      {showDonateBar && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 z-50 shadow-lg px-4 py-4 flex items-center justify-center gap-6 text-center transition-all duration-300">
          <p className="text-base sm:text-lg font-semibold text-gray-800">
            Support <span className="text-black font-bold">Sanjivani Ngo</span>
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full text-sm sm:text-base shadow transition-all duration-200 text-center leading-tight">
            DONATE NOW
            <div className="text-[10px] sm:text-xs italic font-normal mt-1">
              (INDIAN TAX BENEFITS AVAILABLE)
            </div>
          </button>
        </div>
      )}
    </div>
  );
}

async function getDocumentsForCampaign(campaignId: string): Promise<string[]> {
  const mock = {
    'free-medical-help': [
      '/images/sanjivani-logo.png',
      '/images/sanjivani-logo.png',
      '/images/sanjivani-logo.png',
      '/images/sanjivani-logo.png',
      '/images/sanjivani-logo.png',
      '/images/sanjivani-logo.png',
    ],
    'birthday-celebration': [
      '/images/document4.png',
      '/images/document5.png',
    ],
    default: ['/images/sanjivani-logo.png'],
  };

  return mock[campaignId as keyof typeof mock] || mock.default;
}



// 'use client';

// import Image from 'next/image';
// import { useState, useEffect } from 'react';

// interface DocumentsGalleryProps {
//   campaignId: string;
// }

// export default function DocumentsGallery({ campaignId }: DocumentsGalleryProps) {
//   const [documents, setDocuments] = useState<string[]>([]);
//   const [mainImage, setMainImage] = useState<string>('');

//   useEffect(() => {
//     const fetchDocuments = async () => {
//       const data = await getDocumentsForCampaign(campaignId);
//       setDocuments(data);
//       setMainImage(data[0]);
//     };

//     fetchDocuments();
//   }, [campaignId]);

//   return (
//     <div className="w-full flex justify-start px-4 pt-2 pb-8 max-w-6xl mx-auto">
//       <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-6">
//         <h2 className="text-2xl font-semibold mb-4">Documents</h2>

//         {mainImage && (
//           <div className="bg-white rounded-md shadow-xl p-4 m-16">
//             <Image
//               src={mainImage}
//               alt="Main Report"
//               width={1000}
//               height={400}
//               className="rounded-md w-full h-auto max-h-[600px] object-contain"
//             />

//           </div>
//         )}
//          <div className="flex gap-2 mt-4 overflow-x-auto">
//               {documents.map((src, i) => (
//                 <Image
//                   key={i}
//                   src={src}
//                   alt={`Thumbnail ${i + 1}`}
//                   width={100}
//                   height={100} // increase or decrease height
//                   onClick={() => setMainImage(src)}
//                   className={`rounded-md cursor-pointer border-2 transition object-contain max-h-[80px] ${
//                    mainImage === src ? 'border-green-500' : 'border-gray-300'
//                     }`}
//                     />
//               ))}
//             </div>
//       </div>
//     </div>
//   );
// }


// async function getDocumentsForCampaign(campaignId: string): Promise<string[]> {
//   const mock = {
//     'free-medical-help': [
//       '/images/Doc.png',
//       '/images/Doc.png',
//       '/images/Doc.png',
//     ],
//     'birthday-celebration': [
//       '/images/document4.png',
//       '/images/document5.png',
//     ],
//     default: ['/images/Doc.png'],
//   };

//   return mock[campaignId as keyof typeof mock] || mock.default;
// }
