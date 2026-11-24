import React from 'react';
import Link from 'next/link';
import { generateBreadcrumbSchema } from '@/lib/seo/schema';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const schema = generateBreadcrumbSchema(items);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumbs" className={`breadcrumbs ${className}`}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={item.url}>
              {index > 0 && <span className="sep" aria-hidden="true">/</span>}
              {isLast ? (
                <span aria-current="page" style={{ color: 'var(--gold)' }}>
                  {item.name}
                </span>
              ) : (
                <Link href={item.url.replace('https://aurumhotelskashmir.com', '') || '/'}>
                  {item.name}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}
