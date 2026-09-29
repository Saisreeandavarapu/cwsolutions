import React from 'react';

/**
 * GallerySkeleton - Clean skeleton placeholder with soft shimmer
 * Matches exact aspect ratio and rounded frame to prevent layout shift
 */
export default function GallerySkeleton({ className = '' }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#F0F3F6] border border-[#E2E8F0] ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_1.8s_infinite] -translate-x-full" />
      <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-1.5 opacity-60">
        <div className="h-3 w-2/3 bg-[#D9E1E8] rounded-xs" />
        <div className="h-2.5 w-1/3 bg-[#D9E1E8] rounded-xs" />
      </div>
    </div>
  );
}
