import React from 'react';
import Link from 'next/link';
import { Compass, Home, Landmark } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF]">
      <Header />

      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center flex flex-col items-center justify-center">
        {/* Apple iOS Squircle Crest */}
        <div className="w-20 h-20 rounded-[22px] glass-elevated flex items-center justify-center mb-6 shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_16px_36px_rgba(0,0,0,0.08)]">
          <Landmark className="w-8 h-8 text-[#007AFF]" />
        </div>

        <div className="glass-pill mb-4 text-[#007AFF]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF]" />
          <span>Error 404 • Object Unrecorded</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-[#000000] tracking-[-0.035em] mb-4">
          Record Not Found
        </h1>

        <p className="text-sm sm:text-base text-[#6C6C70] max-w-md mx-auto leading-relaxed mb-10 font-normal">
          The requested artifact accession record or exhibition hall has been relocated or is uncataloged in our digital permanent collection.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          <Link
            href="/"
            className="glass-btn-primary w-full sm:w-auto"
          >
            <Home className="w-4 h-4" />
            <span>Return to Atrium</span>
          </Link>

          <Link
            href="/artifacts"
            className="glass-btn-secondary w-full sm:w-auto"
          >
            <Compass className="w-4 h-4 text-[#007AFF]" />
            <span>Explore 571 Permanent Objects</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
