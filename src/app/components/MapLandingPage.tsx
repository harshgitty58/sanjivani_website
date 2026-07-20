'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Info } from 'lucide-react';
import { indiaMapData } from '../data/indiaMapData';

// Types definition for clean modular structure
interface LabelConfig {
  x: number;
  y: number;
  labelX?: number; // Target label position for UTs/Small states
  labelY?: number;
  hasCallout?: boolean;
}

// 1:1 Precise pre-calculated geographical centroids based on state path data
const labelMapping: Record<string, LabelConfig> = {
  // Northern States
  'jk': { x: 173, y: 61 },
  'hp': { x: 191, y: 133 },
  'pb': { x: 151, y: 152 },
  'ut': { x: 232, y: 175 },
  'hr': { x: 164, y: 195 },
  'dl': { x: 186, y: 210, labelX: 256, labelY: 210, hasCallout: true }, // Delhi
  'ch': { x: 179, y: 160, labelX: 119, labelY: 160, hasCallout: true }, // Chandigarh

  // Western States
  'rj': { x: 119, y: 257 },
  'gj': { x: 66, y: 355 },
  'mh': { x: 180, y: 435 },
  'ga': { x: 122, y: 512, labelX: 62, labelY: 512, hasCallout: true }, // Goa
  'dd': { x: 54, y: 391, labelX: 14, labelY: 391, hasCallout: true },  // Daman & Diu
  'dn': { x: 102, y: 405, labelX: 42, labelY: 405, hasCallout: true },  // Dadra & Nagar Haveli

  // Central States
  'mp': { x: 214, y: 319 },
  'ct': { x: 296, y: 388 },

  // Eastern States
  'up': { x: 265, y: 245 },
  'br': { x: 369, y: 275 },
  'jh': { x: 366, y: 327 },
  'wb': { x: 412, y: 310 },
  'or': { x: 340, y: 405 },
  'sk': { x: 425, y: 235, labelX: 375, labelY: 235, hasCallout: true }, // Sikkim

  // Southern States
  'tg': { x: 237, y: 457 },
  'ap': { x: 263, y: 500 },
  'ka': { x: 171, y: 519 },
  'kl': { x: 166, y: 615 },
  'tn': { x: 211, y: 609 },
  'py': { x: 268, y: 546, labelX: 328, labelY: 546, hasCallout: true }, // Puducherry
  'ld': { x: 99, y: 627, labelX: 39, labelY: 627, hasCallout: true },  // Lakshadweep
  'an': { x: 521, y: 609, labelX: 461, labelY: 609, hasCallout: true },  // Andaman & Nicobar

  // Northeastern States
  'ml': { x: 484, y: 283, labelX: 424, labelY: 283, hasCallout: true }, // Meghalaya
  'as': { x: 516, y: 271 },
  'ar': { x: 550, y: 224 },
  'nl': { x: 546, y: 270, labelX: 606, labelY: 270, hasCallout: true }, // Nagaland
  'mn': { x: 537, y: 301, labelX: 597, labelY: 301, hasCallout: true }, // Manipur
  'mz': { x: 516, y: 337, labelX: 576, labelY: 337, hasCallout: true }, // Mizoram
  'tr': { x: 493, y: 325, labelX: 433, labelY: 325, hasCallout: true }  // Tripura
};

// Official name spelling overrides - 100% correct matching states of India standards
const officialNames: Record<string, string> = {
  'jk': 'Jammu & Kashmir',
  'la': 'Ladakh',
  'hp': 'Himachal Pradesh',
  'pb': 'Punjab',
  'ut': 'Uttarakhand',
  'hr': 'Haryana',
  'dl': 'Delhi',
  'ch': 'Chandigarh',
  'rj': 'Rajasthan',
  'gj': 'Gujarat',
  'mh': 'Maharashtra',
  'ga': 'Goa',
  'dd': 'Daman and Diu',
  'dn': 'Dadra and Nagar Haveli',
  'mp': 'Madhya Pradesh',
  'ct': 'Chhattisgarh',
  'up': 'Uttar Pradesh',
  'br': 'Bihar',
  'jh': 'Jharkhand',
  'wb': 'West Bengal',
  'or': 'Odisha',
  'sk': 'Sikkim',
  'tg': 'Telangana',
  'ap': 'Andhra Pradesh',
  'ka': 'Karnataka',
  'kl': 'Kerala',
  'tn': 'Tamil Nadu',
  'py': 'Puducherry',
  'ld': 'Lakshadweep',
  'an': 'Andaman & Nicobar Islands',
  'ml': 'Meghalaya',
  'as': 'Assam',
  'ar': 'Arunachal Pradesh',
  'nl': 'Nagaland',
  'mn': 'Manipur',
  'mz': 'Mizoram',
  'tr': 'Tripura'
};

// High-fidelity styling tokens matching the Sanjivani dark branding
const stateColors: Record<string, string> = {
  // Blue Shades
  'jk': 'fill-[#e0f2fe]/80 stroke-[#0284c7] hover:fill-[#bae6fd]',
  'pb': 'fill-[#e0f2fe]/80 stroke-[#0284c7] hover:fill-[#bae6fd]',
  'wb': 'fill-[#e0f2fe]/80 stroke-[#0284c7] hover:fill-[#bae6fd]',
  'tn': 'fill-[#e0f2fe]/80 stroke-[#0284c7] hover:fill-[#bae6fd]',
  'as': 'fill-[#e0f2fe]/80 stroke-[#0284c7] hover:fill-[#bae6fd]',
  // Green Shades
  'la': 'fill-[#dcfce7]/80 stroke-[#16a34a] hover:fill-[#bbf7d0]',
  'hr': 'fill-[#dcfce7]/80 stroke-[#16a34a] hover:fill-[#bbf7d0]',
  'ct': 'fill-[#dcfce7]/80 stroke-[#16a34a] hover:fill-[#bbf7d0]',
  'ka': 'fill-[#dcfce7]/80 stroke-[#16a34a] hover:fill-[#bbf7d0]',
  'tr': 'fill-[#dcfce7]/80 stroke-[#16a34a] hover:fill-[#bbf7d0]',
  // Pink/Rose Shades
  'hp': 'fill-[#ffe4e6]/80 stroke-[#e11d48] hover:fill-[#fecdd3]',
  'up': 'fill-[#ffe4e6]/80 stroke-[#e11d48] hover:fill-[#fecdd3]',
  'or': 'fill-[#ffe4e6]/80 stroke-[#e11d48] hover:fill-[#fecdd3]',
  'kl': 'fill-[#ffe4e6]/80 stroke-[#e11d48] hover:fill-[#fecdd3]',
  'ml': 'fill-[#ffe4e6]/80 stroke-[#e11d48] hover:fill-[#fecdd3]',
  // Yellow Shades
  'ut': 'fill-[#fef9c3]/80 stroke-[#ca8a04] hover:fill-[#fef08a]',
  'gj': 'fill-[#fef9c3]/80 stroke-[#ca8a04] hover:fill-[#fef08a]',
  'jh': 'fill-[#fef9c3]/80 stroke-[#ca8a04] hover:fill-[#fef08a]',
  'tg': 'fill-[#fef9c3]/80 stroke-[#ca8a04] hover:fill-[#fef08a]',
  'mn': 'fill-[#fef9c3]/80 stroke-[#ca8a04] hover:fill-[#fef08a]',
  // Orange/Amber Shades
  'rj': 'fill-[#ffedd5]/80 stroke-[#ea580c] hover:fill-[#fed7aa]',
  'br': 'fill-[#ffedd5]/80 stroke-[#ea580c] hover:fill-[#fed7aa]',
  'ap': 'fill-[#ffedd5]/80 stroke-[#ea580c] hover:fill-[#fed7aa]',
  'ar': 'fill-[#ffedd5]/80 stroke-[#ea580c] hover:fill-[#fed7aa]',
  'mz': 'fill-[#ffedd5]/80 stroke-[#ea580c] hover:fill-[#fed7aa]',
  // Purple/Lavender Shades
  'mp': 'fill-[#f3e8ff]/80 stroke-[#9333ea] hover:fill-[#e9d5ff]',
  'mh': 'fill-[#f3e8ff]/80 stroke-[#9333ea] hover:fill-[#e9d5ff]',
  'nl': 'fill-[#f3e8ff]/80 stroke-[#9333ea] hover:fill-[#e9d5ff]',
  'sk': 'fill-[#f3e8ff]/80 stroke-[#9333ea] hover:fill-[#e9d5ff]',
  // Union Territories / Small Points
  'dl': 'fill-[#fef08a] stroke-[#eab308] hover:fill-[#fef08a]',
  'ch': 'fill-[#fef08a] stroke-[#eab308] hover:fill-[#fef08a]',
  'ga': 'fill-[#fef08a] stroke-[#eab308] hover:fill-[#fef08a]',
  'dd': 'fill-[#fef08a] stroke-[#eab308] hover:fill-[#fef08a]',
  'dn': 'fill-[#fef08a] stroke-[#eab308] hover:fill-[#fef08a]',
  'ld': 'fill-[#fef08a] stroke-[#eab308] hover:fill-[#fef08a]',
  'an': 'fill-[#fef08a] stroke-[#eab308] hover:fill-[#fef08a]',
  'py': 'fill-[#fef08a] stroke-[#eab308] hover:fill-[#fef08a]'
};

export default function MapLandingPage() {
  const router = useRouter();
  const [hoveredLocation, setHoveredLocation] = useState<typeof indiaMapData.locations[0] | null>(null);

  const handleStateClick = (stateName: string) => {
    router.push(`/?state=${encodeURIComponent(stateName)}`);
  };

  return (
    <div className="min-h-screen w-screen bg-[#f1f5f9] text-slate-800 flex flex-col overflow-y-auto relative">
      
      {/* Subtle light background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 pointer-events-none" />

      {/* Main Map Presentation */}
      <main className="flex-1 relative z-10 flex flex-col items-center justify-center px-4 py-8 md:px-8">
        
        {/* Select Region Badge */}
        <div className="text-center mb-6 flex flex-col items-center">
          {/* Dynamic Map Selection Hint Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-xs shadow-md transition-all duration-200">
            <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span className="font-extrabold text-slate-700 uppercase tracking-wider">
              {hoveredLocation ? `${officialNames[hoveredLocation.id] || hoveredLocation.name} (Capital: ${hoveredLocation.capital})` : 'Select Region: Hover or Tap State'}
            </span>
          </div>
        </div>

        {/* Map Container (no card bounding box, plain transparent container) */}
        <div className="w-full max-w-[95vw] md:w-auto h-[78vh] min-h-[600px] md:min-h-[700px] max-h-[calc(100vh-160px)] aspect-[612/696] flex items-center justify-center relative overflow-hidden group">

          {/* SVG Map Canvas */}
          <svg
            viewBox="-50 -30 712 756"
            className="w-full h-full drop-shadow-[0_8px_24px_rgba(15,23,42,0.06)] select-none transition-transform duration-500 ease-out"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Map Paths — base layer (all states) */}
            {indiaMapData.locations.map((loc) => {
              const colorClass = stateColors[loc.id] || 'fill-slate-100 stroke-slate-400';
              const isHovered = hoveredLocation?.id === loc.id;
              const anyHovered = hoveredLocation !== null;
              const cfg = labelMapping[loc.id];
              const cx = cfg ? cfg.x : 300;
              const cy = cfg ? cfg.y : 350;

              return (
                <path
                  key={loc.id}
                  id={loc.id}
                  d={loc.path}
                  style={{
                    transformOrigin: `${cx}px ${cy}px`,
                    transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.35s ease, opacity 0.3s ease',
                    transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                    filter: isHovered
                      ? 'drop-shadow(0 8px 16px rgba(15,23,42,0.12)) drop-shadow(0 2px 4px rgba(15,23,42,0.08))'
                      : 'none',
                    opacity: anyHovered && !isHovered ? 0.45 : 1,
                    stroke: isHovered ? '#ffffff' : undefined,
                    strokeWidth: isHovered ? 2.5 : 1.2,
                  }}
                  className={`
                    cursor-pointer transition-all duration-300
                    ${colorClass}
                    ${isHovered ? 'saturate-[1.1] brightness-[0.82]' : ''}
                  `}
                  onMouseEnter={() => setHoveredLocation(loc)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  onClick={() => handleStateClick(loc.name)}
                />
              );
            })}

            {/* Elevated overlay — re-render the hovered state on top for clean z-order */}
            {hoveredLocation && (() => {
              const loc = hoveredLocation;
              const colorClass = stateColors[loc.id] || 'fill-slate-100 stroke-slate-400';
              const cfg = labelMapping[loc.id];
              const cx = cfg ? cfg.x : 300;
              const cy = cfg ? cfg.y : 350;
              return (
                <path
                  d={loc.path}
                  style={{
                    transformOrigin: `${cx}px ${cy}px`,
                    transform: 'scale(1.06)',
                    filter: 'drop-shadow(0 10px 20px rgba(15,23,42,0.15)) drop-shadow(0 3px 6px rgba(15,23,42,0.1))',
                    stroke: '#ffffff',
                    strokeWidth: 2.5,
                    pointerEvents: 'none',
                  }}
                  className={`
                    saturate-[1.1] brightness-[0.82] pointer-events-none
                    ${colorClass}
                  `}
                />
              );
            })()}

            {/* Labels — always visible, with hover emphasis */}
            {indiaMapData.locations.map((loc) => {
              const cfg = labelMapping[loc.id];
              if (!cfg) return null;
              const isHovered = hoveredLocation?.id === loc.id;
              const anyHovered = hoveredLocation !== null;

              // Callout labels (small states/UTs with leader lines)
              if (cfg.hasCallout && cfg.labelX !== undefined && cfg.labelY !== undefined) {
                const isLeft = cfg.labelX < cfg.x;
                const textAnchor = isLeft ? 'end' : 'start';
                
                return (
                  <g
                    key={`callout-${loc.id}`}
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredLocation(loc)}
                    onMouseLeave={() => setHoveredLocation(null)}
                    onClick={() => handleStateClick(loc.name)}
                    style={{
                      opacity: anyHovered && !isHovered ? 0.45 : 1,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    <path
                      d={`M ${cfg.x} ${cfg.y} L ${cfg.labelX} ${cfg.labelY}`}
                      stroke={isHovered ? '#1e3a8a' : '#94a3b8'}
                      strokeWidth={isHovered ? 2 : 1.2}
                      strokeDasharray={isHovered ? 'none' : '3 2'}
                      className="transition-all duration-300 fill-none"
                    />
                    <circle 
                      cx={cfg.x} 
                      cy={cfg.y} 
                      r={isHovered ? 5.5 : 3} 
                      fill={isHovered ? '#3b82f6' : '#1e293b'} 
                      stroke={isHovered ? '#ffffff' : '#e2e8f0'} 
                      strokeWidth={isHovered ? 2 : 1.2} 
                      className="transition-all duration-300"
                    />
                    
                    <text
                      x={isLeft ? cfg.labelX - 5 : cfg.labelX + 5}
                      y={cfg.labelY + 4}
                      textAnchor={textAnchor}
                      style={{
                        fontSize: isHovered ? '11px' : '9px',
                        fontWeight: 800,
                        fill: isHovered ? '#1e3a8a' : '#334155',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase' as const,
                        transition: 'fill 0.3s ease, font-size 0.3s ease',
                        filter: isHovered ? 'drop-shadow(0 1px 2px rgba(0,0,0,0.15))' : 'drop-shadow(0 1px 1px rgba(255,255,255,0.85))',
                      }}
                    >
                      {officialNames[loc.id] || loc.name}
                    </text>
                  </g>
                );
              }

              // Inline labels (large states — label sits inside the state polygon)
              return (
                <text
                  key={`lbl-${loc.id}`}
                  x={cfg.x}
                  y={cfg.y + 3.5}
                  textAnchor="middle"
                  className="pointer-events-none select-none"
                  style={{
                    fontSize: isHovered ? '11px' : '9px',
                    fontWeight: 800,
                    fill: isHovered ? '#0f172a' : '#334155',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase' as const,
                    transformOrigin: `${cfg.x}px ${cfg.y}px`,
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), fill 0.3s ease, font-size 0.3s ease',
                    filter: isHovered ? 'drop-shadow(0 1px 2px rgba(0,0,0,0.15))' : 'drop-shadow(0 1px 1px rgba(255,255,255,0.85))',
                    opacity: anyHovered && !isHovered ? 0.5 : 1,
                  }}
                >
                  {officialNames[loc.id] || loc.name}
                </text>
              );
            })}
          </svg>

        </div>

      </main>
    </div>
  );
}
