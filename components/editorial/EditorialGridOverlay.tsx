'use client';

import React from 'react';

/**
 * Architectural Magazine / Museum 4-Column Vertical Line Overlay
 * Replicates the subtle hairline vertical rules seen in luxury editorial layouts.
 */
export const EditorialGridOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none px-6 sm:px-12 lg:px-20">
      <div className="w-full h-full max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 border-x border-white/[0.06]">
        <div className="border-r border-white/[0.06] h-full" />
        <div className="hidden md:block border-r border-white/[0.06] h-full" />
        <div className="hidden md:block border-r border-white/[0.06] h-full" />
        <div className="h-full" />
      </div>
    </div>
  );
};
