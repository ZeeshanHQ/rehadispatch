import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: number;
}

export default function BrandLogo({ className = "w-8 h-8", size = 32 }: BrandLogoProps) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        {/* Background gradient container */}
        <rect width="40" height="40" rx="10" fill="url(#rehaGradientBg)" />
        
        {/* Minimalist Geometric 'R' & Dynamic Forward Freight Vector */}
        <path
          d="M12 10H22C25.3137 10 28 12.6863 28 16C28 19.3137 25.3137 22 22 22H12V10Z"
          stroke="white"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 10V30"
          stroke="white"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M20 22L27.5 30"
          stroke="white"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* High-RPM Forward Accent Spark */}
        <circle cx="28" cy="11" r="2.5" fill="#38BDF8" />

        <defs>
          <linearGradient id="rehaGradientBg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#090A0F" />
            <stop offset="1" stopColor="#0284C7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
