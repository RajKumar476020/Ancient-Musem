'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Compass, Layers, Clock, Info } from 'lucide-react';

export const TabBar: React.FC = () => {
  const pathname = usePathname();

  const tabs = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Collection', href: '/artifacts', icon: Compass },
    { label: 'Galleries', href: '/#categories', icon: Layers },
    { label: 'Eras', href: '/#eras', icon: Clock },
    { label: 'About', href: '/about', icon: Info },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href === '/artifacts') return pathname.startsWith('/artifacts');
    if (href === '/about') return pathname === '/about';
    return false;
  };

  return (
    <nav
      aria-label="iOS Tab Bar"
      className="fixed bottom-5 inset-x-0 mx-auto w-fit z-40 px-3 pointer-events-auto"
    >
      {/* iOS 26 Floating Liquid Glass Tab Bar Dock */}
      <div className="flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-full bg-white/80 backdrop-blur-3xl border border-white/90 shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_16px_40px_-8px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.04)]">
        {tabs.map((tab) => {
          const active = isActive(tab.href);
          const Icon = tab.icon;

          return (
            <Link
              key={tab.label}
              href={tab.href}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-[12.5px] font-medium transition-all duration-200 active:scale-[0.94] ${
                active
                  ? 'bg-[#007AFF] text-white font-semibold shadow-[0_4px_14px_rgba(0,122,255,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)]'
                  : 'text-[#6C6C70] hover:text-[#000000] hover:bg-black/5'
              }`}
            >
              <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-[#6C6C70]'}`} />
              <span className="hidden sm:inline">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

