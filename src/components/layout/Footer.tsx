import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="glass-surface border-t border-black/5 mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">

          {/* Identity */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group w-fit active:scale-95 transition-transform">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-b from-[#1C1C1E] to-[#000000] flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <rect x="3" y="2.5" width="2" height="11" rx="0.5" fill="white" opacity="0.95"/>
                  <rect x="7" y="2.5" width="2" height="11" rx="0.5" fill="white" opacity="0.95"/>
                  <rect x="11" y="2.5" width="2" height="11" rx="0.5" fill="white" opacity="0.95"/>
                  <rect x="2" y="5.5" width="12" height="1.5" rx="0.5" fill="#007AFF"/>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[14.5px] font-bold text-[#000000] group-hover:text-[#007AFF] transition-colors tracking-tight">
                  Ancient Musem
                </span>
                <span className="text-[10px] font-medium text-[#8E8E93] uppercase tracking-wider mt-0.5">Digital Heritage &amp; Artifacts Archive</span>
              </div>
            </Link>

            <p className="text-[13.5px] text-[#6C6C70] leading-relaxed max-w-sm">
              Ancient Musem is a scholarly open-access digital museum archiving 571 authenticated historical artifacts,
              ancient dynastic coinages, sacred sculpture, and archaeological antiquities across 4,500 years of civilization.
            </p>

            <div className="glass-pill text-[11px] text-[#007AFF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF]" />
              <span>571 Open-Access Antiquities</span>
            </div>
          </div>

          {/* Collections */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-[11.5px] font-bold text-[#000000] tracking-[0.06em] uppercase">
              Galleries
            </h3>
            <ul className="space-y-2.5 text-[13.5px] text-[#6C6C70]">
              {[
                { label: 'Complete Collection', href: '/artifacts', count: '571' },
                { label: 'Ancient Coins', href: '/categories/ancient-coins', count: '104' },
                { label: 'Hindu Deity Sculptures', href: '/categories/hindu-deity-sculptures', count: '144' },
                { label: 'Terracotta & Metal', href: '/categories/terracotta-figurines', count: '120' },
                { label: 'Stone Sculptures', href: '/categories/stone-sculptures', count: '70' },
                { label: 'Medieval Coins', href: '/categories/medieval-coins', count: '68' },
              ].map(({ label, href, count }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-[#007AFF] transition-colors flex items-center justify-between group"
                  >
                    <span>{label}</span>
                    <span className="text-[11px] font-mono text-[#8E8E93]">{count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Standards */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-[11.5px] font-bold text-[#000000] tracking-[0.06em] uppercase">
              Standards
            </h3>
            <ul className="space-y-2.5 text-[13.5px] text-[#6C6C70]">
              {[
                { label: 'Curatorial Principles', href: '/about' },
                { label: 'Sourcing Hierarchy', href: '/about#sourcing' },
                { label: 'Image Verification', href: '/about#licensing' },
                { label: 'Historical Evidence', href: '/about#uncertainty' },
                { label: '7 Historical Eras', href: '/#eras' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-[#007AFF] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Open Access */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-[11.5px] font-bold text-[#000000] tracking-[0.06em] uppercase">
              Open Access Archive
            </h3>
            <p className="text-[13px] text-[#6C6C70] leading-relaxed">
              Every photograph in this repository is authenticated from verified public domain collections
              (Cleveland Museum of Art, Archaeological Survey of India, and peer academic institutions).
            </p>
            <div className="p-4 bg-white/80 backdrop-blur-xl rounded-[18px] border border-white/95 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_2px_8px_rgba(0,0,0,0.03)] text-[12.5px] text-[#6C6C70] space-y-1">
              <span className="font-bold text-[#000000] block">Public Scholarly Initiative</span>
              <p className="text-[11.5px] text-[#8E8E93] leading-relaxed">
                Dedicated to academic discovery, intellectual transparency, and global cultural preservation.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between text-[12px] text-[#8E8E93] gap-4">
          <p className="font-mono">© 2026 Ancient Musem. Open Access Cultural Heritage.</p>
          <div className="flex items-center gap-5">
            {[
              { label: 'Curatorial Standards', href: '/about' },
              { label: 'Image Provenance', href: '/about#licensing' },
              { label: 'Archive Index', href: '/sitemap.xml' },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="hover:text-[#007AFF] transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
