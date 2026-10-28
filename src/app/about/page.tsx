import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, BookOpen, Scale, Sparkles, Image as ImageIcon, HeartHandshake } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'About the Museum & Curatorial Standards',
  description:
    'Learn about our research standards, historical sourcing hierarchy, open-access image licensing policy, and educational mission.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F5]">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 w-full">
        {/* Breadcrumb Trail */}
        <Breadcrumbs items={[{ label: 'About & Standards' }]} />

        {/* Page Heading */}
        <div className="my-8 space-y-3">
          <span className="text-xs font-semibold text-[#8A6A43] uppercase tracking-widest block">
            Digital Heritage Mission
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#242424] tracking-tight">
            About the Museum &amp; Research Standards
          </h1>
          <p className="text-base sm:text-lg text-[#6B6B65] font-normal leading-relaxed">
            The Historical Artifacts Museum is a dedicated digital heritage publication created to make the authentic material culture of Indian history accessible, intellectually transparent, and visually stunning.
          </p>
        </div>

        {/* Article Content */}
        <div className="space-y-12 my-12">
          {/* Section 1: Vision */}
          <section className="bg-[#FFFFFF] rounded-2xl border border-[#E7E5DF] p-6 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#242424] flex items-center gap-2 border-b border-[#E7E5DF] pb-3">
              <Sparkles className="w-5 h-5 text-[#8A6A43]" />
              <span>Project Vision &amp; Scope</span>
            </h2>
            <div className="text-base text-[#242424] leading-relaxed space-y-4">
              <p>
                Our objective is to function like a carefully curated, peer-reviewed historical publication. Rather than building speculative 3D virtual walkthroughs or relying on generic AI interpretations, we focus on genuine historical objects: ancient and medieval coinage, sacred deity statues in bronze and stone, Harappan seals, and early figurines.
              </p>
              <p>
                Visitors discover objects, examine high-resolution photographs, inspect verified physical characteristics, read deep contextual analyses, and discover related artifacts across dynasties and epochs.
              </p>
            </div>
          </section>

          {/* Section 2: Sourcing Hierarchy */}
          <section id="sourcing" className="bg-[#FFFFFF] rounded-2xl border border-[#E7E5DF] p-6 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#242424] flex items-center gap-2 border-b border-[#E7E5DF] pb-3">
              <BookOpen className="w-5 h-5 text-[#8A6A43]" />
              <span>Historical Research &amp; Source Hierarchy</span>
            </h2>
            <div className="text-base text-[#242424] leading-relaxed space-y-4">
              <p>
                Historical credibility is our core product requirement. We adhere strictly to an evidence-grounded research hierarchy:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-[#6B6B65]">
                <li>
                  <strong className="text-[#242424]">Primary Museum Records:</strong> Official accession catalogues and object files from institutions like the National Museum in New Delhi, the British Museum, The Metropolitan Museum of Art, and the Archaeological Survey of India (ASI).
                </li>
                <li>
                  <strong className="text-[#242424]">Archaeological Site Reports:</strong> Stratigraphic excavation memoirs by pioneers such as Sir John Marshall, Ernest J.H. Mackay, and modern ASI archaeologists.
                </li>
                <li>
                  <strong className="text-[#242424]">Peer-Reviewed Academic Scholarship:</strong> Definitive scholarly monographs on Indian numismatics, epigraphy, and iconography published by university presses (Oxford, Cambridge, Banaras Hindu University).
                </li>
              </ol>
            </div>
          </section>

          {/* Section 3: Handling Historical Uncertainty */}
          <section id="uncertainty" className="bg-[#FFFFFF] rounded-2xl border border-[#E7E5DF] p-6 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#242424] flex items-center gap-2 border-b border-[#E7E5DF] pb-3">
              <Scale className="w-5 h-5 text-[#8A6A43]" />
              <span>Handling Historical Uncertainty</span>
            </h2>
            <div className="text-base text-[#242424] leading-relaxed space-y-4">
              <p>
                Where dates or interpretations are unsettled in modern scholarship, we present approximate date ranges and explicitly identify scholarly debate rather than fabricating certainty.
              </p>
              <p>
                For example, while popular literature often characterizes Harappan terracotta figurines as &quot;Mother Goddesses&quot;, we clearly distinguish between traditional ritual hypotheses and modern archaeological caution regarding prehistoric domestic effigies. Similarly, we explicitly acknowledge that the Indus script remains undeciphered.
              </p>
            </div>
          </section>

          {/* Section 4: Image Rights */}
          <section id="licensing" className="bg-[#FFFFFF] rounded-2xl border border-[#E7E5DF] p-6 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#242424] flex items-center gap-2 border-b border-[#E7E5DF] pb-3">
              <ImageIcon className="w-5 h-5 text-[#8A6A43]" />
              <span>Open Access &amp; Image Provenance Policy</span>
            </h2>
            <div className="text-base text-[#242424] leading-relaxed space-y-4">
              <p>
                All photographs in our collection are obtained under verified Open Access, Public Domain (CC0), or Creative Commons (CC BY / CC BY-SA) licenses. For every published photograph:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#6B6B65]">
                <li>The original holding institution or photographer is credited.</li>
                <li>The specific license type and reference link are published.</li>
                <li>Direct links to the original repository record are provided.</li>
                <li>No watermarked or unauthorized commercial images are used.</li>
              </ul>
            </div>
          </section>

          {/* Section 5: Institutional Disclaimer */}
          <section className="bg-[#F0EFEA] rounded-2xl border border-[#E7E5DF] p-6 sm:p-8 space-y-3">
            <h2 className="text-lg font-semibold text-[#242424] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#8A6A43]" />
              <span>Independent Educational Project Disclosure</span>
            </h2>
            <p className="text-sm text-[#6B6B65] leading-relaxed">
              The Historical Artifacts Museum is an independent digital heritage project and does not claim official affiliation with or endorsement by the Archaeological Survey of India, the Ministry of Culture, or any state museum. All physical artifacts described herein remain the cultural heritage of humanity preserved in their respective holding institutions.
            </p>
          </section>
        </div>

        {/* Back Action */}
        <div className="pt-6 text-center">
          <Link
            href="/artifacts"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#242424] text-white rounded-lg text-sm font-semibold hover:bg-[#3A3A34] transition-colors"
          >
            <span>Explore the 20 Researched Artifacts</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
