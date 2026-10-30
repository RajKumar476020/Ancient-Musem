import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-2">
      <ol className="flex items-center flex-wrap gap-1 text-[12.5px]">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1 text-[#8E8E93] hover:text-[#007AFF] transition-colors"
          >
            <Home className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1">
              <ChevronRight className="w-3 h-3 text-[#C7C7CC]" aria-hidden="true" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-[#8E8E93] hover:text-[#007AFF] transition-colors max-w-[160px] sm:max-w-xs truncate"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="text-[#000000] font-semibold max-w-[180px] sm:max-w-md truncate"
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
