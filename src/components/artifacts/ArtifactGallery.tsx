'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Maximize2, X, ExternalLink, Shield } from 'lucide-react';
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

  // Handle escape key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLightboxOpen]);

  return (
    <div className="space-y-4">
      {/* Primary Display Container */}
      <div className="relative group bg-[#FFFFFF] rounded-2xl border border-[#E7E5DF] overflow-hidden shadow-sm aspect-[4/3] sm:aspect-[16/10] w-full">
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 800px"
          className="object-contain p-4 sm:p-6"
        />

        {/* Click to expand overlay button */}
        <button
          onClick={() => setIsLightboxOpen(true)}
          type="button"
          aria-label="Expand image in high resolution"
          className="absolute top-4 right-4 p-2.5 bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#242424] rounded-lg shadow-sm border border-[#E7E5DF] opacity-90 group-hover:opacity-100 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6A43]"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Caption bar */}
        {activeImage.caption && (
          <div className="absolute bottom-0 inset-x-0 bg-[#FFFFFF]/90 backdrop-blur-sm p-3 border-t border-[#E7E5DF] text-xs text-[#6B6B65] flex items-center justify-between">
            <span className="font-medium text-[#242424] truncate">
              {activeImage.caption}
            </span>
            <span className="text-[11px] text-[#8A6A43] shrink-0 ml-2">
              Click to inspect details
            </span>
          </div>
        )}
      </div>

      {/* Thumbnails if multiple images */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              type="button"
              className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                selectedIndex === idx
                  ? 'border-[#8A6A43] ring-2 ring-[#8A6A43]/20'
                  : 'border-[#E7E5DF] hover:border-[#8A6A43]/50'
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Image Attribution & Provenance Panel */}
      <div className="p-4 bg-[#F8F8F5] rounded-xl border border-[#E7E5DF] text-xs text-[#6B6B65] space-y-1.5">
        <div className="flex items-center gap-1.5 font-medium text-[#242424]">
          <Shield className="w-3.5 h-3.5 text-[#8A6A43]" />
          <span>Image Rights & Verification</span>
        </div>
        <p>
          <strong className="text-[#242424]">Photographer / Source:</strong>{' '}
          {activeImage.creator || activeImage.institution || 'Museum Archive'}
        </p>
        <p>
          <strong className="text-[#242424]">License:</strong> {activeImage.license}{' '}
          {activeImage.sourceUrl && (
            <a
              href={activeImage.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-[#8A6A43] underline hover:text-[#6E5333] ml-1"
            >
              Verify Record <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </p>
      </div>

      {/* High-Resolution Modal Lightbox */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded high-resolution view of ${artifactTitle}`}
        >
          {/* Top action bar */}
          <div className="flex items-center justify-between text-white pb-4 border-b border-white/20">
            <div>
              <h2 className="text-sm sm:text-base font-semibold">{artifactTitle}</h2>
              <p className="text-xs text-white/70">{activeImage.caption || activeImage.alt}</p>
            </div>
            <button
              onClick={() => setIsLightboxOpen(false)}
              type="button"
              aria-label="Close high-resolution view"
              className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#8A6A43]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Central image container */}
          <div className="relative flex-1 w-full my-4 flex items-center justify-center">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* Lightbox Footer with Provenance */}
          <div className="text-center text-xs text-white/70 pt-2 border-t border-white/20">
            <span>{activeImage.attribution || activeImage.creator || 'Museum Open Access Archive'}</span>
            <span className="mx-2">•</span>
            <span>{activeImage.license}</span>
          </div>
        </div>
      )}
    </div>
  );
};
