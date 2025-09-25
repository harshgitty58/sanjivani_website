'use client';

export default function StartFundraiserSection() {
  return (
    <div
      className="w-full py-20 flex items-center justify-center bg-[#149c74]"
      style={{
        backgroundImage: `url('/images/pattern.png')`, 
        backgroundRepeat: 'repeat',
        backgroundSize: 'contain',
      }}
    >
      <button className="bg-white text-green-700 font-bold text-lg px-8 py-4 rounded-full shadow-md hover:shadow-lg transition">
        START A FREE FUNDRAISER
      </button>
    </div>
  );
}
