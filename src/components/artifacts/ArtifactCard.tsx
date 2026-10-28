import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Landmark } from 'lucide-react';
import { Artifact } from '@/types/artifact';

interface ArtifactCardProps {
  artifact: Artifact;
  priority?: boolean;
}

export const ArtifactCard: React.FC<ArtifactCardProps> = ({
  artifact,
  priority = false,
}) => {
  const primaryImage =
    artifact.images.find((img) => img.isPrimary) ?? artifact.images[0];

  return (
    <article className="group relative bg-[#FFFFFF] rounded-xl border border-[#E7E5DF] overflow-hidden flex flex-col hover:border-[#8A6A43]/40 hover:shadow-md transition-all duration-300">
      {/* Image Container with smooth hover zoom */}
      <Link
        href={`/artifacts/${artifact.slug}`}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-[#F0EFEA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6A43]"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={primaryImage.src}
          alt={primaryImage.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          priority={priority}
        />
        {/* Subtle gradient vignette at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata Badges: Dynasty / Era & Date */}
          <div className="flex flex-wrap items-center gap-2 mb-3 text-xs">
            {artifact.dynasty && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F0EFEA] text-[#242424] font-medium">
                <Landmark className="w-3 h-3 text-[#8A6A43]" />
                {artifact.dynasty}
              </span>
            )}
            <span className="inline-flex items-center gap-1 text-[#6B6B65]">
              <Calendar className="w-3 h-3 text-[#8A6A43]" />
              {artifact.dateDisplay}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-[#242424] group-hover:text-[#8A6A43] transition-colors leading-snug mb-2">
            <Link
              href={`/artifacts/${artifact.slug}`}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6A43] rounded"
            >
              {artifact.title}
            </Link>
          </h3>

          {/* Short summary */}
          <p className="text-sm text-[#6B6B65] line-clamp-2 leading-relaxed mb-4">
            {artifact.summary}
          </p>
        </div>

        {/* Footer Action */}
        <div className="pt-3 border-t border-[#E7E5DF]/70 flex items-center justify-between text-xs font-semibold text-[#8A6A43] group-hover:text-[#6E5333]">
          <span>Explore History</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </article>
  );
};
