import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import ClientLayout from '@/components/ClientLayout';
import JsonLd from '@/components/JsonLd';
import { HOTEL_INFO } from '@/data/hotelInfo';
import { SITE_URL } from '@/lib/seo/canonical';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0A1628',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${HOTEL_INFO.fullName} | Luxury Hotel in Srinagar`,
    template: `%s | ${HOTEL_INFO.brand}`,
  },
  description:
    'Experience refined luxury in Brein Hills, Astanpora, Srinagar. The Aurum Luxury Collection offers handcrafted wooden cottages, panoramic Dal View chalets, dining, and warm Kashmir hospitality.',
  keywords: [
    'Luxury hotel in Srinagar',
    'Hotel in Brein Hills Srinagar',
    'Luxury stay in Kashmir',
    'Dal View Chalet Srinagar',
    'Premium accommodation in Srinagar',
    'The Aurum Luxury Collection',
    'Stay Pattern Kashmir',
    'Srinagar boutique chalets',
  ],
  authors: [{ name: HOTEL_INFO.fullName }],
  creator: 'Stay Pattern',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    title: `${HOTEL_INFO.fullName} | Luxury Hotel in Srinagar`,
    description:
      'Discover an exceptional stay in Brein Hills, Astanpora. Handcrafted cottages, panoramic Dal Lake views, and refined Kashmiri hospitality.',
    siteName: HOTEL_INFO.fullName,
    images: [
      {
        url: `${SITE_URL}/images/hero/aurum-estate-brein-hills.png`,
        width: 1200,
        height: 630,
        alt: 'The Aurum Luxury Collection property nestled in Brein Hills Srinagar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${HOTEL_INFO.fullName} | Luxury Hotel in Srinagar`,
    description:
      'Discover an exceptional stay in Brein Hills, Astanpora. Handcrafted cottages, panoramic Dal Lake views, and refined Kashmiri hospitality.',
    images: [
      `${SITE_URL}/images/hero/aurum-estate-brein-hills.png`,
    ],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || '',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {/* Core Global Structured Data */}
        <JsonLd type="Hotel" />
        <JsonLd type="WebSite" />
        <JsonLd type="Organization" />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
