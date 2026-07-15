'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

interface DonationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onDonate?: (amount: number, isMonthly: boolean) => void;
}

export default function DonationPopup({ isOpen, onClose, onDonate }: DonationPopupProps) {
  const [donationTab, setDonationTab] = useState<'once' | 'monthly'>('once');
  const [selectedAmount, setSelectedAmount] = useState(9999);
  const [customAmount, setCustomAmount] = useState('9999');

  if (!isOpen) return null;

  const handleDonate = () => {
    const amount = parseInt(customAmount) || selectedAmount;
    onDonate?.(amount, donationTab === 'monthly');
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
      />

      {/* Modal - Desktop: centered, Mobile: bottom sheet */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex max-h-[85vh] w-full max-w-md flex-col overflow-y-auto rounded-t-2xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200 lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
          <h3 className="text-[17px] font-bold text-gray-900 m-0">
            Transaction Details
          </h3>
          <button
            onClick={onClose}
            aria-label="Close donation popup"
            title="Close donation popup"
            className="bg-none border-none text-xl text-gray-500 cursor-pointer p-1 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Once / Monthly Toggle */}
          <div className="flex items-center justify-center mb-4">
            <div
              onClick={() => setDonationTab(donationTab === 'monthly' ? 'once' : 'monthly')}
              className="relative flex h-8 w-[90px] cursor-pointer items-center justify-center rounded-[16px] bg-[#E87B35] p-1 shadow-[inset_0_1px_3px_rgba(0,0,0,0.15)] select-none transition-colors"
            >
              {/* Sliding knob */}
              <div
                className={`absolute z-10 h-6 w-6 rounded-full bg-white shadow-md transition-all ${donationTab === 'monthly' ? 'translate-x-14' : 'translate-x-0'}`}
              />
              {/* Text */}
              <span
                className="text-xs font-semibold text-white relative z-0"
              >
                {donationTab === 'monthly' ? 'Monthly' : 'Once'}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 my-3" />

          {/* Amount Selection */}
          <p className="font-bold text-sm text-gray-900 mb-3">
            CHOOSE AMOUNT
          </p>
          <div className="flex gap-2 mb-3 flex-wrap">
            {[1800, 4000, 7500, 9999].map((amt) => (
              <button
                key={amt}
                onClick={() => {
                  setSelectedAmount(amt);
                  setCustomAmount(amt.toString());
                }}
                className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-all ${selectedAmount === amt ? 'border-2 border-[#16836A] bg-[#16836A] text-white' : 'border border-slate-200 bg-white text-slate-700'}`}
              >
                ₹{amt.toLocaleString('en-IN')}
              </button>
            ))}
          </div>

          {/* Custom Amount Input */}
          <div className="flex gap-2 mb-6">
            <div className="border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-500 font-semibold">
              ₹ INR
            </div>
            <input
              type="number"
              aria-label="Custom donation amount"
              placeholder="Enter amount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(parseInt(e.target.value) || 0);
              }}
              className="flex-1 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#E87B35] transition-colors"
            />
          </div>

          {/* Donate Button */}
          <button
            onClick={handleDonate}
            className="w-full bg-[#E87B35] hover:bg-[#D96B26] text-white font-bold py-3.5 rounded-xl transition-all shadow-lg"
          >
            DONATE
          </button>

          {/* Terms */}
          <p className="text-xs text-gray-400 mt-4 text-center leading-relaxed">
            By proceeding, you are agreeing to Sanjivani's{' '}
            <span className="text-[#16836A] font-semibold">Terms of Use</span>,{' '}
            <span className="text-[#16836A] font-semibold">Privacy Policy</span>, and{' '}
            <span className="text-[#16836A] font-semibold">Cookie Policy</span>
          </p>
        </div>
      </div>
    </>
  );
}
