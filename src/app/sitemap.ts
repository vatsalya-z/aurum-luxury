import { MetadataRoute } from 'next';
import { ROOMS } from '@/data/rooms';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aurumhotelskashmir.com';

  const routes = [
    '',
    '/rooms',
    '/facilities',
    '/gallery',
    '/experiences',
    '/contact',
    '/privacy-policy',
    '/terms-conditions',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const roomRoutes = ROOMS.map((room) => ({
    url: `${baseUrl}/rooms/${room.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...routes, ...roomRoutes];
}
