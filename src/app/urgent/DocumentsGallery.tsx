'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface DocumentsGalleryProps {
  campaignId: string;
}

export default function DocumentsGallery({ campaignId }: DocumentsGalleryProps) {
  const [documents, setDocuments] = useState<string[]>([]);
  const [mainImage, setMainImage] = useState<string>('');

  useEffect(() => {
    const fetchDocuments = async () => {
      const data = await getDocumentsForCampaign(campaignId);
      setDocuments(data);
      setMainImage(data[0]);
    };

    fetchDocuments();
  }, [campaignId]);

  return (
    <div className="w-full flex justify-start px-4 pt-2 pb-8 max-w-6xl mx-auto">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Documents</h2>

        {mainImage && (
          <div className="bg-white rounded-md shadow-xl p-4 m-16">
            <Image
              src={mainImage}
              alt="Main Report"
              width={1000}
              height={400}
              className="rounded-md w-full h-auto max-h-[600px] object-contain"
            />

          </div>
        )}
         <div className="flex gap-2 mt-4 overflow-x-auto">
              {documents.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`Thumbnail ${i + 1}`}
                  width={100}
                  height={100} // increase or decrease height
                  onClick={() => setMainImage(src)}
                  className={`rounded-md cursor-pointer border-2 transition object-contain max-h-[80px] ${
                   mainImage === src ? 'border-green-500' : 'border-gray-300'
                    }`}
                    />
              ))}
            </div>
      </div>
    </div>
  );
}


async function getDocumentsForCampaign(campaignId: string): Promise<string[]> {
  const mock = {
    'free-medical-help': [
      '/images/Doc.png',
      '/images/Doc.png',
      '/images/Doc.png',
    ],
    'birthday-celebration': [
      '/images/document4.png',
      '/images/document5.png',
    ],
    default: ['/images/Doc.png'],
  };

  return mock[campaignId as keyof typeof mock] || mock.default;
}
