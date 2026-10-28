'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Search } from 'lucide-react';
import { MobileNav } from './MobileNav';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E7E5DF] transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <Link
            href="/"
            className="flex flex-col group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6A43] rounded"
          >
            <span className="font-semibold text-lg sm:text-xl text-[#242424] tracking-tight group-hover:text-[#8A6A43] transition-colors">
              The Historical Artifacts Museum
            </span>
            <span className="text-xs text-[#8A6A43] tracking-widest uppercase font-medium">
              Digital Heritage Collection
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#6B6B65]"
          >
            <Link
              href="/"
              className="hover:text-[#242424] transition-colors py-1 border-b-2 border-transparent hover:border-[#8A6A43]"
            >
              Home
            </Link>
            <Link
              href="/artifacts"
              className="hover:text-[#242424] transition-colors py-1 border-b-2 border-transparent hover:border-[#8A6A43]"
            >
              Explore Artifacts
            </Link>
            <Link
              href="/#categories"
              className="hover:text-[#242424] transition-colors py-1 border-b-2 border-transparent hover:border-[#8A6A43]"
            >
              Categories
            </Link>
            <Link
              href="/#eras"
              className="hover:text-[#242424] transition-colors py-1 border-b-2 border-transparent hover:border-[#8A6A43]"
            >
              Historical Eras
            </Link>
            <Link
              href="/about"
              className="hover:text-[#242424] transition-colors py-1 border-b-2 border-transparent hover:border-[#8A6A43]"
            >
              About
            </Link>
          </nav>

          {/* Right Actions: Search Button & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <Link
              href="/artifacts"
              aria-label="Search Collection"
              className="flex items-center gap-2 px-3 py-2 text-sm text-[#6B6B65] hover:text-[#242424] hover:bg-[#F0EFEA] rounded-lg transition-colors border border-transparent hover:border-[#E7E5DF] focus-visible:ring-2 focus-visible:ring-[#8A6A43]"
            >
              <Search className="w-4 h-4 text-[#8A6A43]" />
              <span className="hidden sm:inline">Search</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              type="button"
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 text-[#242424] hover:bg-[#F0EFEA] rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#8A6A43]"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Menu Overlay */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
