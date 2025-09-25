'use client';

import { Building2 } from 'lucide-react';

export default function WaiverNotice() {
  return (
    <div className="bg-gray-200 rounded-xl px-6 py-3 my-6 text-center flex items-center justify-center gap-2 max-w-6xl mx-auto">
      <Building2 className="w-5 h-5 text-gray-800" />
      <p className="text-gray-800 text-sm sm:text-base font-medium">
        ImpactGuru has waived off its fee for this cause
      </p>
    </div>
  );
}
