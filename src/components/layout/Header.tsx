'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Search } from 'lucide-react';
import { MobileNav } from './MobileNav';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Collection', href: '/artifacts' },
    { label: 'Galleries', href: '/#categories' },
    { label: 'Eras', href: '/#eras' },
    { label: 'About', href: '/about' },
  ];

  const isActive = (href: string) =>
    href !== '/' &&
    href !== '/#categories' &&
    href !== '/#eras' &&
    (pathname === href || (href.startsWith('/artifacts') && pathname.startsWith('/artifacts')));

  return (
    <>
      <header className="sticky top-2.5 sm:top-3.5 z-40 w-full px-3 sm:px-6 pointer-events-none transition-all duration-300">
        <div
          className={`max-w-6xl mx-auto h-14 sm:h-16 px-4 sm:px-6 flex items-center justify-between gap-4 pointer-events-auto rounded-2xl sm:rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-white/88 backdrop-blur-3xl border border-white/95 shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_18px_44px_-8px_rgba(0,0,0,0.1)]'
              : 'bg-white/75 backdrop-blur-2xl border border-white/85 shadow-[inset_0_1px_1.5px_rgba(255,255,255,1),0_10px_32px_-6px_rgba(0,0,0,0.05)]'
          }`}
        >
          {/* Ancient Musem Emblem */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF] rounded-full active:scale-95 transition-transform"
            aria-label="Ancient Musem — Home"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-b from-[#1C1C1E] to-[#000000] flex items-center justify-center shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_3px_8px_rgba(0,0,0,0.18)]">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="3" y="2.5" width="2" height="11" rx="0.5" fill="white" opacity="0.95"/>
                <rect x="7" y="2.5" width="2" height="11" rx="0.5" fill="white" opacity="0.95"/>
                <rect x="11" y="2.5" width="2" height="11" rx="0.5" fill="white" opacity="0.95"/>
                <rect x="2" y="5.5" width="12" height="1.5" rx="0.5" fill="#007AFF"/>
              </svg>
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-[14px] font-semibold text-[#000000] tracking-tight group-hover:text-[#007AFF] transition-colors">
                Ancient Musem
              </span>
              <span className="text-[10px] font-medium text-[#8E8E93] tracking-wider mt-0.5 hidden sm:block uppercase">
                Digital Museum
              </span>
            </div>
          </Link>

          {/* Apple Segmented Navigation Dock */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center p-1 rounded-full bg-[#E5E5EA]/55 backdrop-blur-xl border border-white/60 shadow-[inset_0_1px_1.5px_rgba(0,0,0,0.04)]"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 active:scale-95 ${
                    active
                      ? 'bg-white text-[#000000] font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,1)]'
                      : 'text-[#6C6C70] hover:text-[#000000] hover:bg-white/50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Search Pill & Mobile Hamburger */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/artifacts"
              aria-label="Search the collection"
              className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 text-[12.5px] font-medium text-[#6C6C70] hover:text-[#000000] bg-white/75 hover:bg-white rounded-full border border-white/90 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_2px_8px_rgba(0,0,0,0.03)] transition-all active:scale-95"
            >
              <Search className="w-3.5 h-3.5 text-[#007AFF]" />
              <span className="hidden sm:inline">Search</span>
              <span className="hidden md:inline-flex items-center justify-center px-1.5 py-0.2 text-[9.5px] font-mono text-[#8E8E93] bg-[#F2F2F7] rounded-md border border-[#E5E5EA]">
                ⌘K
              </span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 text-[#000000] hover:text-[#007AFF] bg-white/80 hover:bg-white rounded-full border border-white/90 shadow-[inset_0_1px_1px_rgba(255,255,255,1)] transition-all active:scale-90"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* iOS 26 Mobile Sheet */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
