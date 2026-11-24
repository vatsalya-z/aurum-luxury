import { Metadata } from 'next';
import { HOTEL_INFO } from '@/data/hotelInfo';
import { getCanonicalUrl, SITE_URL } from './canonical';

export interface MetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
}

const DEFAULT_IMAGE = '/images/hero/aurum-estate-brein-hills.png';

/**
 * Standardized metadata builder for Next.js App Router pages.
 * Enforces canonical consistency, rich OpenGraph & Twitter tags, and indexability rules.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = DEFAULT_IMAGE,
  noIndex = false,
}: MetadataOptions): Metadata {
  const canonicalUrl = getCanonicalUrl(path);
  const absoluteImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  const defaultKeywords = [
    'The Aurum Luxury Collection',
    'luxury hotel in Srinagar',
    'Brein Hills Srinagar hotel',
    'Dal Lake view chalets',
    'Kashmir luxury cottages',
    'Stay Pattern Kashmir',
  ];

  const mergedKeywords = Array.from(new Set([...keywords, ...defaultKeywords]));

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: HOTEL_INFO.fullName,
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - The Aurum Luxury Collection Srinagar`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteImageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}
