import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Scale, Sparkles, Image as ImageIcon, ArrowRight, Landmark } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Curatorial Methodology & Academic Standards',
  description:
    'Learn about our research standards, historical sourcing hierarchy, open-access image licensing policy, and educational mission.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF]">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 w-full">
        {/* Breadcrumb Trail */}
        <Breadcrumbs items={[{ label: 'About & Curatorial Standards' }]} />

        {/* Apple Large Title Header */}
        <div className="my-8 sm:my-14 space-y-4">
          <div className="glass-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF]" />
            <span>Digital Heritage Mandate</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#000000] tracking-[-0.035em] leading-[1.1]">
            Curatorial Methodology &amp; Academic Standards
          </h1>
          <p className="text-base sm:text-lg text-[#6C6C70] leading-relaxed">
            Ancient Musem is a scholarly digital archive committed to making the authentic material culture of ancient, classical, and medieval India accessible with intellectual transparency and curatorial elegance.
          </p>
        </div>

        {/* Content in iOS 26 Liquid Glass Boxes */}
        <div className="space-y-8 my-12">
          {/* Section 1: Vision */}
          <section className="glass-card p-7 sm:p-10 space-y-4">
            <div className="flex items-center justify-between border-b border-black/5 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[14px] bg-[#007AFF]/10 border border-[#007AFF]/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-[#007AFF]" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#000000] tracking-tight">
                  Project Vision &amp; Scope
                </h2>
              </div>
              <span className="glass-pill text-[10.5px]">
                Philosophy
              </span>
            </div>
            <div className="text-sm sm:text-base text-[#3C3C43] leading-relaxed space-y-4">
              <p>
                Our objective is to function like a peer-reviewed, open-access digital museum catalog. Rather than generating hypothetical 3D reconstructions or synthetic renderings, our digital catalog documents authentic physical specimens: dynastic coins, lost-wax sacred bronzes, stone inscriptions, and Harappan seals.
              </p>
              <p className="text-[#6C6C70]">
                Visitors can inspect high-resolution photographs, verify physical weights, dimensions, and alloys, and examine curated connections across dynastic reigns and historical eras.
              </p>
            </div>
          </section>

          {/* Section 2: Sourcing Hierarchy */}
          <section id="sourcing" className="glass-card p-7 sm:p-10 space-y-4">
            <div className="flex items-center justify-between border-b border-black/5 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[14px] bg-[#007AFF]/10 border border-[#007AFF]/20 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-[#007AFF]" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#000000] tracking-tight">
                  Historical Research &amp; Source Hierarchy
                </h2>
              </div>
              <span className="glass-pill text-[10.5px]">
                Methodology
              </span>
            </div>
            <div className="text-sm sm:text-base text-[#3C3C43] leading-relaxed space-y-4">
              <p>
                Intellectual integrity is our fundamental foundation. We adhere strictly to an evidence-grounded research hierarchy:
              </p>
              <div className="space-y-3.5 pt-2">
                <div className="p-5 bg-white/80 backdrop-blur-xl rounded-[18px] border border-white/95 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_2px_8px_rgba(0,0,0,0.03)] space-y-1">
                  <div className="flex items-center gap-2.5 font-bold text-xs text-[#007AFF] uppercase tracking-wider">
                    <span className="w-5 h-5 rounded-full bg-[#007AFF] text-white flex items-center justify-center text-[10px]">1</span>
                    <span>Primary Museum Accession Records</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6C6C70] pl-7">
                    Official object inventories, registration records, and collection files from repositories including the National Museum (New Delhi), British Museum, The Metropolitan Museum of Art, and the Archaeological Survey of India (ASI).
                  </p>
                </div>

                <div className="p-5 bg-white/80 backdrop-blur-xl rounded-[18px] border border-white/95 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_2px_8px_rgba(0,0,0,0.03)] space-y-1">
                  <div className="flex items-center gap-2.5 font-bold text-xs text-[#007AFF] uppercase tracking-wider">
                    <span className="w-5 h-5 rounded-full bg-[#007AFF] text-white flex items-center justify-center text-[10px]">2</span>
                    <span>Archaeological Excavation Memoirs</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6C6C70] pl-7">
                    Stratigraphic excavation reports by pioneering and modern field archaeologists documenting precise findspots, layer depth, and companion artifacts.
                  </p>
                </div>

                <div className="p-5 bg-white/80 backdrop-blur-xl rounded-[18px] border border-white/95 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_2px_8px_rgba(0,0,0,0.03)] space-y-1">
                  <div className="flex items-center gap-2.5 font-bold text-xs text-[#007AFF] uppercase tracking-wider">
                    <span className="w-5 h-5 rounded-full bg-[#007AFF] text-white flex items-center justify-center text-[10px]">3</span>
                    <span>Peer-Reviewed Academic Monographs</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6C6C70] pl-7">
                    Authoritative scholarship on numismatics, epigraphy, and Sanskrit/Prakrit iconography published by academic university presses.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Handling Uncertainty */}
          <section id="uncertainty" className="glass-card p-7 sm:p-10 space-y-4">
            <div className="flex items-center justify-between border-b border-black/5 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[14px] bg-[#007AFF]/10 border border-[#007AFF]/20 flex items-center justify-center shrink-0">
                  <Scale className="w-5 h-5 text-[#007AFF]" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#000000] tracking-tight">
                  Handling Historical Uncertainty
                </h2>
              </div>
              <span className="glass-pill text-[10.5px]">
                Epistemology
              </span>
            </div>
            <div className="text-sm sm:text-base text-[#3C3C43] leading-relaxed space-y-4">
              <p>
                Where dates or interpretations remain unresolved in contemporary academic consensus, we provide approximate ranges and transparently identify scholarly hypotheses rather than fabricating artificial certainty.
              </p>
              <p className="text-[#6C6C70]">
                For instance, while early 20th-century literature categorized Indus female terracotta figurines as &quot;Mother Goddesses,&quot; modern archaeological analysis separates ritual cult interpretations from secular domestic representations. Likewise, we explicitly note that the Indus script remains undeciphered despite hundreds of proposed translation attempts.
              </p>
            </div>
          </section>

          {/* Section 4: Image Rights */}
          <section id="licensing" className="glass-card p-7 sm:p-10 space-y-4">
            <div className="flex items-center justify-between border-b border-black/5 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[14px] bg-[#007AFF]/10 border border-[#007AFF]/20 flex items-center justify-center shrink-0">
                  <ImageIcon className="w-5 h-5 text-[#007AFF]" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#000000] tracking-tight">
                  Open Access &amp; Image Rights Policy
                </h2>
              </div>
              <span className="glass-pill text-[10.5px]">
                Public Domain
              </span>
            </div>
            <div className="text-sm sm:text-base text-[#3C3C43] leading-relaxed space-y-4">
              <p>
                Every photograph in our collection is curated strictly under verified Open Access, Public Domain (CC0), or Creative Commons (CC BY / CC BY-SA) licenses. For each object record:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-[#6C6C70] pt-2">
                <li className="flex items-start gap-2.5 p-4 bg-white/80 backdrop-blur-xl rounded-[16px] border border-white/95 shadow-[inset_0_1px_1px_rgba(255,255,255,1)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] mt-2 shrink-0" />
                  <span>The holding museum or photographer is visibly credited.</span>
                </li>
                <li className="flex items-start gap-2.5 p-4 bg-white/80 backdrop-blur-xl rounded-[16px] border border-white/95 shadow-[inset_0_1px_1px_rgba(255,255,255,1)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] mt-2 shrink-0" />
                  <span>The explicit CC or public domain license status is verified.</span>
                </li>
                <li className="flex items-start gap-2.5 p-4 bg-white/80 backdrop-blur-xl rounded-[16px] border border-white/95 shadow-[inset_0_1px_1px_rgba(255,255,255,1)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] mt-2 shrink-0" />
                  <span>Direct link to the original institutional record is provided.</span>
                </li>
                <li className="flex items-start gap-2.5 p-4 bg-white/80 backdrop-blur-xl rounded-[16px] border border-white/95 shadow-[inset_0_1px_1px_rgba(255,255,255,1)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] mt-2 shrink-0" />
                  <span>No watermarked, speculative, or unauthorized imagery is permitted.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5: Institutional Disclaimer */}
          <section className="glass-card p-7 sm:p-10 space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-[14px] bg-[#007AFF]/10 border border-[#007AFF]/20 flex items-center justify-center shrink-0">
                <Landmark className="w-5 h-5 text-[#007AFF]" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-[#000000] tracking-tight">
                Independent Educational Initiative Disclosure
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#6C6C70] leading-relaxed">
              Ancient Musem is an independent digital heritage initiative created for public education and scholarship. It is not officially affiliated with or endorsed by the Archaeological Survey of India, the Ministry of Culture, or any state museum. The physical artifacts described remain the cultural property of humanity preserved within their respective institutions.
            </p>
          </section>
        </div>

        {/* Back Action */}
        <div className="pt-6 text-center">
          <Link
            href="/artifacts"
            className="glass-btn-primary group"
          >
            <span>Explore All 571 Curated Antiquities</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
