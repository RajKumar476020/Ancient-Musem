'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ZoomIn, X, ExternalLink, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { ArtifactImage } from '@/types/artifact';

interface ArtifactGalleryProps {
  images: ArtifactImage[];
  artifactTitle: string;
}

export const ArtifactGallery: React.FC<ArtifactGalleryProps> = ({
  images,
  artifactTitle,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activeImage = images[selectedIndex] || images[0];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') setIsLightboxOpen(false);
      if (e.key === 'ArrowLeft') setSelectedIndex((i) => Math.max(0, i - 1));
      if (e.key === 'ArrowRight') setSelectedIndex((i) => Math.min(images.length - 1, i + 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, images.length]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isLightboxOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isLightboxOpen]);

  return (
    <div className="space-y-3.5">

      {/* Primary Vitrine */}
      <div className="relative group glass-card overflow-hidden aspect-[4/3] sm:aspect-[16/11] w-full flex items-center justify-center p-2 rounded-[24px]">
        {/* Radial Pedestal */}
        <div className="absolute inset-0 artifact-pedestal pointer-events-none" />

        <div className="relative w-full h-full">
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>

        {/* Expand Button Pill */}
        <button
          onClick={() => setIsLightboxOpen(true)}
          type="button"
          aria-label="View full-size image"
          className="absolute top-3.5 right-3.5 glass-pill bg-white/95 text-[#000000] opacity-0 group-hover:opacity-100 transition-all duration-200 focus:outline-none focus-visible:opacity-100 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.06)] active:scale-95"
        >
          <ZoomIn className="w-3.5 h-3.5 text-[#007AFF]" />
          <span>Expand</span>
        </button>

        {/* Caption */}
        {activeImage.caption && (
          <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-xl px-4 py-2 border-t border-white/80">
            <p className="text-[12px] text-[#6C6C70] truncate font-medium">{activeImage.caption}</p>
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin" role="list" aria-label="Image gallery">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              type="button"
              role="listitem"
              aria-label={`View image ${idx + 1}: ${img.alt}`}
              aria-current={selectedIndex === idx ? 'true' : 'false'}
              className={`relative w-[72px] h-[72px] rounded-[16px] overflow-hidden border-2 shrink-0 bg-white/80 p-1 transition-all active:scale-95 ${
                selectedIndex === idx
                  ? 'border-[#007AFF] shadow-[0_0_0_2px_rgba(0,122,255,0.25)]'
                  : 'border-white/90 hover:border-[#007AFF]/40'
              }`}
            >
              <Image src={img.src} alt={img.alt} fill className="object-contain p-0.5" sizes="72px" />
            </button>
          ))}
        </div>
      )}

      {/* Provenance Panel */}
      <div className="p-4 glass-card rounded-[22px] text-[12.5px] text-[#6C6C70] space-y-2.5">
        <div className="flex items-center justify-between pb-2.5 border-b border-black/5">
          <div className="flex items-center gap-1.5 font-bold text-[#000000]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#007AFF]" />
            <span className="text-[11.5px] uppercase tracking-[0.06em]">Image Provenance</span>
          </div>
          <span className="glass-pill text-[10.5px] text-[#007AFF]">
            Open Access
          </span>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-[#8E8E93]">Source:</span>
            <span className="font-semibold text-[#000000] text-right truncate max-w-[200px]">
              {activeImage.creator || activeImage.institution || 'Museum Repository'}
            </span>
          </div>
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-[#8E8E93]">License:</span>
            <span className="font-medium text-[#000000] text-right">
              {activeImage.license}{' '}
              {activeImage.sourceUrl && (
                <a
                  href={activeImage.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-0.5 text-[#007AFF] hover:underline ml-1 font-semibold"
                >
                  Verify <ExternalLink className="w-2.5 h-2.5" />
                </a>
              )}
            </span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-3xl flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label={`High-resolution view: ${artifactTitle}`}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-white/10">
            <div>
              <h2 className="text-[16px] sm:text-[18px] font-bold text-white tracking-tight">{artifactTitle}</h2>
              <p className="text-[12px] text-white/60 mt-0.5">{activeImage.caption || activeImage.alt}</p>
            </div>
            <button
              onClick={() => setIsLightboxOpen(false)}
              type="button"
              aria-label="Close"
              className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#007AFF]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Image Viewport */}
          <div className="relative flex-1 flex items-center justify-center p-6">
            <div className="relative w-full h-full">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>

            {/* Prev/Next Controls */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() => setSelectedIndex((i) => Math.max(0, i - 1))}
                  disabled={selectedIndex === 0}
                  type="button"
                  aria-label="Previous image"
                  className="absolute left-4 p-3 bg-white/15 hover:bg-white/25 disabled:opacity-20 disabled:cursor-not-allowed rounded-full text-white backdrop-blur-xl transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setSelectedIndex((i) => Math.min(images.length - 1, i + 1))}
                  disabled={selectedIndex === images.length - 1}
                  type="button"
                  aria-label="Next image"
                  className="absolute right-4 p-3 bg-white/15 hover:bg-white/25 disabled:opacity-20 disabled:cursor-not-allowed rounded-full text-white backdrop-blur-xl transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Footer Bar */}
          <div className="flex items-center justify-between px-5 sm:px-8 py-3 border-t border-white/10 text-[12px] text-white/60 font-medium">
            <span>{activeImage.attribution || activeImage.creator || 'Open Access Archive'}</span>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[#007AFF]">{activeImage.license}</span>
              {images.length > 1 && (
                <span className="text-white/40">{selectedIndex + 1} / {images.length}</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
