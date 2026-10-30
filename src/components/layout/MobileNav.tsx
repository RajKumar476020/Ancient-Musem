'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Compass, Clock, Layers, Info, Search, ArrowRight } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickCategories = [
    { label: 'Ancient Coins', slug: 'ancient-coins', count: 104 },
    { label: 'Hindu Deities', slug: 'hindu-deity-sculptures', count: 144 },
    { label: 'Terracotta & Metal', slug: 'terracotta-figurines', count: 120 },
    { label: 'Stone Sculptures', slug: 'stone-sculptures', count: 70 },
    { label: 'Medieval Coins', slug: 'medieval-coins', count: 68 },
    { label: 'Seals & Regalia', slug: 'archaeological-seals', count: 65 },
  ];

  const navItems = [
    { label: 'Complete Collection', href: '/artifacts', icon: Compass, count: '571' },
    { label: 'Galleries', href: '/#categories', icon: Layers },
    { label: 'Historical Eras', href: '/#eras', icon: Clock },
    { label: 'About the Museum', href: '/about', icon: Info },
  ];

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end bg-black/30 backdrop-blur-md transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      onClick={onClose}
    >
      {/* iOS 26 Liquid Glass Bottom Sheet */}
      <div
        className="w-full max-h-[90vh] bg-white/94 backdrop-blur-3xl rounded-t-[32px] border-t border-x border-white/95 shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_-16px_48px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden pb-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* iOS Grabber */}
        <div className="w-full flex justify-center pt-3 pb-1">
          <div className="w-10 h-1.5 rounded-full bg-[#8E8E93]/30" />
        </div>

        {/* Sheet Header */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-black/5">
          <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-black flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="3" y="2.5" width="2" height="11" rx="0.5" fill="white" opacity="0.95"/>
                <rect x="7" y="2.5" width="2" height="11" rx="0.5" fill="white" opacity="0.95"/>
                <rect x="11" y="2.5" width="2" height="11" rx="0.5" fill="white" opacity="0.95"/>
                <rect x="2" y="5.5" width="12" height="1.5" rx="0.5" fill="#007AFF"/>
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[14.5px] font-bold text-[#000000]">Ancient Musem</span>
              <span className="text-[10px] text-[#8E8E93] uppercase tracking-wider mt-0.5">Digital Heritage Museum</span>
            </div>
          </Link>
          <button
            onClick={onClose}
            type="button"
            aria-label="Close menu"
            className="p-2 text-[#000000] hover:bg-black/5 rounded-full border border-black/5 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Sheet Content */}
        <div className="flex-1 px-6 py-5 overflow-y-auto space-y-6">

          {/* Search Pill */}
          <Link
            href="/artifacts"
            onClick={onClose}
            className="flex items-center justify-between w-full py-3 px-4 bg-white/80 backdrop-blur-xl border border-white/95 rounded-[18px] text-[13.5px] font-medium text-[#6C6C70] shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_2px_8px_rgba(0,0,0,0.02)] hover:border-[#007AFF]/40 transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <Search className="w-4 h-4 text-[#007AFF]" />
              <span>Search 571 authentic artifacts...</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#8E8E93]" />
          </Link>

          {/* Primary Navigation */}
          <nav className="space-y-1.5" aria-label="Site navigation">
            <p className="text-[11px] font-bold text-[#8E8E93] uppercase tracking-[0.06em] px-3 pb-1">Navigation</p>
            {navItems.map(({ label, href, icon: Icon, count }) => {
              const active = href !== '/' && href !== '/#categories' && href !== '/#eras' && pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={onClose}
                  className={`flex items-center justify-between px-4 py-3 rounded-[16px] text-[14px] font-medium transition-colors ${
                    active
                      ? 'bg-[#007AFF] text-white font-semibold shadow-[0_4px_14px_rgba(0,122,255,0.35)]'
                      : 'text-[#6C6C70] hover:text-[#000000] hover:bg-black/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${active ? 'bg-white/20' : 'bg-[#007AFF]/10'}`}>
                      <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-[#007AFF]'}`} />
                    </div>
                    <span>{label}</span>
                  </div>
                  {count && (
                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${active ? 'bg-white/20 text-white' : 'bg-[#F2F2F7] text-[#8E8E93]'}`}>
                      {count}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Categories Grid */}
          <div className="space-y-2 pt-2 border-t border-black/5">
            <p className="text-[11px] font-bold text-[#8E8E93] uppercase tracking-[0.06em] px-3">Galleries</p>
            <div className="grid grid-cols-2 gap-2">
              {quickCategories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/categories/${c.slug}`}
                  onClick={onClose}
                  className="p-3 bg-white/80 hover:bg-white rounded-[16px] border border-white/95 shadow-[inset_0_1px_1px_rgba(255,255,255,1)] transition-all flex flex-col justify-between min-h-[64px]"
                >
                  <span className="text-[12.5px] font-semibold text-[#000000] line-clamp-1">{c.label}</span>
                  <span className="text-[10.5px] text-[#8E8E93] font-mono">{c.count} objects</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
