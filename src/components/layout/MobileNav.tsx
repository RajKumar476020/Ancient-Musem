'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { X, Compass, Clock, Layers, Info, Search } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#F8F8F5]"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Top bar with close button */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#E7E5DF] bg-[#FFFFFF]">
        <Link href="/" onClick={onClose} className="flex flex-col">
          <span className="font-semibold text-base text-[#242424] tracking-tight">
            The Historical Artifacts Museum
          </span>
          <span className="text-xs text-[#8A6A43] tracking-widest uppercase font-medium">
            Digital Heritage Collection
          </span>
        </Link>
        <button
          onClick={onClose}
          type="button"
          aria-label="Close menu"
          className="p-2 -mr-2 text-[#242424] hover:bg-[#F0EFEA] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6A43]"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation links */}
      <nav className="flex-1 px-6 py-8 overflow-y-auto space-y-2">
        <Link
          href="/artifacts"
          onClick={onClose}
          className="flex items-center gap-3.5 px-4 py-3.5 text-base font-medium text-[#242424] hover:bg-[#FFFFFF] hover:text-[#8A6A43] rounded-xl border border-transparent hover:border-[#E7E5DF] transition-all"
        >
          <Compass className="w-5 h-5 text-[#8A6A43]" />
          <span>Explore Artifacts</span>
        </Link>

        <Link
          href="/#categories"
          onClick={onClose}
          className="flex items-center gap-3.5 px-4 py-3.5 text-base font-medium text-[#242424] hover:bg-[#FFFFFF] hover:text-[#8A6A43] rounded-xl border border-transparent hover:border-[#E7E5DF] transition-all"
        >
          <Layers className="w-5 h-5 text-[#8A6A43]" />
          <span>Categories</span>
        </Link>

        <Link
          href="/#eras"
          onClick={onClose}
          className="flex items-center gap-3.5 px-4 py-3.5 text-base font-medium text-[#242424] hover:bg-[#FFFFFF] hover:text-[#8A6A43] rounded-xl border border-transparent hover:border-[#E7E5DF] transition-all"
        >
          <Clock className="w-5 h-5 text-[#8A6A43]" />
          <span>Historical Eras</span>
        </Link>

        <Link
          href="/about"
          onClick={onClose}
          className="flex items-center gap-3.5 px-4 py-3.5 text-base font-medium text-[#242424] hover:bg-[#FFFFFF] hover:text-[#8A6A43] rounded-xl border border-transparent hover:border-[#E7E5DF] transition-all"
        >
          <Info className="w-5 h-5 text-[#8A6A43]" />
          <span>About & Standards</span>
        </Link>

        <div className="pt-6 border-t border-[#E7E5DF]">
          <Link
            href="/artifacts"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#242424] text-white rounded-lg font-medium text-sm hover:bg-[#3A3A34] transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Search 20 Curated Artifacts</span>
          </Link>
        </div>
      </nav>

      {/* Footer in mobile nav */}
      <div className="p-6 border-t border-[#E7E5DF] bg-[#FFFFFF] text-xs text-[#6B6B65]">
        <p>Curated Digital Museum of Indian Antiquity</p>
        <p className="mt-1 text-[#8A6A43]">Verified Open Access & Public Domain Heritage</p>
      </div>
    </div>
  );
};
