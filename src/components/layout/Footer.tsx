import React from 'react';
import Link from 'next/link';
import { Compass, BookOpen, ShieldCheck, HeartHandshake } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E7E5DF] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1: Museum Identity */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-semibold text-lg text-[#242424] tracking-tight block">
                The Historical Artifacts Museum
              </span>
              <span className="text-xs text-[#8A6A43] tracking-widest uppercase font-medium">
                Digital Heritage Collection
              </span>
            </Link>
            <p className="text-sm text-[#6B6B65] leading-relaxed">
              A curated digital heritage publication presenting authentic historical objects, ancient coins, sacred sculptures, and archaeological artifacts from Indian antiquity.
            </p>
          </div>

          {/* Column 2: Collection Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-[#242424] tracking-wider uppercase mb-4 flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#8A6A43]" />
              <span>Explore</span>
            </h3>
            <ul className="space-y-2.5 text-sm text-[#6B6B65]">
              <li>
                <Link href="/artifacts" className="hover:text-[#242424] transition-colors">
                  All 20 Artifacts
                </Link>
              </li>
              <li>
                <Link href="/categories/ancient-coins" className="hover:text-[#242424] transition-colors">
                  Ancient & Medieval Coins
                </Link>
              </li>
              <li>
                <Link href="/categories/hindu-deity-sculptures" className="hover:text-[#242424] transition-colors">
                  Hindu Deity Sculptures
                </Link>
              </li>
              <li>
                <Link href="/categories/archaeological-seals" className="hover:text-[#242424] transition-colors">
                  Harappan Seals & Tablets
                </Link>
              </li>
              <li>
                <Link href="/#eras" className="hover:text-[#242424] transition-colors">
                  Browse by Historical Era
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Curatorial Standards */}
          <div>
            <h3 className="text-sm font-semibold text-[#242424] tracking-wider uppercase mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#8A6A43]" />
              <span>Standards</span>
            </h3>
            <ul className="space-y-2.5 text-sm text-[#6B6B65]">
              <li>
                <Link href="/about" className="hover:text-[#242424] transition-colors">
                  Curatorial Principles
                </Link>
              </li>
              <li>
                <Link href="/about#sourcing" className="hover:text-[#242424] transition-colors">
                  Historical Sourcing Hierarchy
                </Link>
              </li>
              <li>
                <Link href="/about#licensing" className="hover:text-[#242424] transition-colors">
                  Open Access & Image Rights
                </Link>
              </li>
              <li>
                <Link href="/about#uncertainty" className="hover:text-[#242424] transition-colors">
                  Handling Historical Uncertainty
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Ethics & Rights */}
          <div>
            <h3 className="text-sm font-semibold text-[#242424] tracking-wider uppercase mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#8A6A43]" />
              <span>Ethical Heritage</span>
            </h3>
            <p className="text-xs text-[#6B6B65] leading-relaxed mb-3">
              All imagery in this digital museum is sourced from verified open-access museum archives (The Met, LACMA, Cleveland Museum of Art) and Wikimedia Commons public-domain collections.
            </p>
            <div className="p-3 bg-[#F8F8F5] rounded-lg border border-[#E7E5DF] text-xs text-[#6B6B65]">
              <span className="font-medium text-[#242424] block mb-1">Non-Commercial Educational Archive</span>
              Dedicated to public historical awareness, scholarship, and cultural heritage preservation.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-12 border-t border-[#E7E5DF] flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B6B65] gap-4">
          <p>© {new Date().getFullYear()} The Historical Artifacts Museum. All historical rights and image credits belong to their respective institutions.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-[#242424] transition-colors">
              About Project
            </Link>
            <Link href="/sitemap.xml" className="hover:text-[#242424] transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
