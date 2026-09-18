import React from "react";

// Official Razorpay Monogram & Wordmark SVG
export const RazorpayLogo = ({ className = "h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Razorpay iconic lightning / razor badge */}
    <path d="M12.82 0L0 20.48H9.36L16.24 0H12.82Z" fill="#0C2340"/>
    <path d="M16.92 7.52L12.38 20.48H21.74L26.28 7.52H16.92Z" fill="#0284C7"/>
    {/* Razorpay wordmark */}
    <text x="32" y="19" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="16" fill="#0C2340" letterSpacing="-0.5px">
      Razorpay
    </text>
  </svg>
);

export const RazorpayIconOnly = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.82 2L2 24H12.5L16.5 2H12.82Z" fill="#0C2340"/>
    <path d="M17.2 9.5L12.5 24H23L27.5 9.5H17.2Z" fill="#0284C7"/>
  </svg>
);

export const UpiIcon = ({ className = "h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 54 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="54" height="20" rx="4" fill="#097939" fillOpacity="0.1"/>
    <path d="M10 4L16 10L10 16" stroke="#097939" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 4L22 10L16 16" stroke="#E85D04" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="25" y="14" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="10" fill="#097939">
      UPI
    </text>
  </svg>
);

export const RuPayIcon = ({ className = "h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 52 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="52" height="18" rx="3" fill="#1D4ED8" fillOpacity="0.1"/>
    <text x="5" y="13" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="11" fill="#1D4ED8" letterSpacing="0.5px">
      RuPay
    </text>
    <path d="M42 4L47 9L42 14" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
