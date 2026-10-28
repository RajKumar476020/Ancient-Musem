import React from 'react';
import Link from 'next/link';
import { Compass, Home, Search } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F5]">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center flex flex-col items-center justify-center">
        <span className="text-xs font-semibold text-[#8A6A43] uppercase tracking-widest block mb-3">
          Error 404 • Artifact Not Found
        </span>

        <h1 className="text-4xl sm:text-5xl font-semibold text-[#242424] tracking-tight mb-4">
          This Page Has Lost Its Provenance
        </h1>

        <p className="text-base sm:text-lg text-[#6B6B65] max-w-md mx-auto leading-relaxed mb-8">
          The historical record or archive page you are seeking does not exist or has been relocated within our collections.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#242424] text-white rounded-lg text-sm font-semibold hover:bg-[#3A3A34] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/artifacts"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FFFFFF] text-[#242424] border border-[#E7E5DF] rounded-lg text-sm font-semibold hover:bg-[#F0EFEA] transition-colors"
          >
            <Compass className="w-4 h-4 text-[#8A6A43]" />
            <span>Explore All 20 Artifacts</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
