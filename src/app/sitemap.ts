import { MetadataRoute } from 'next';
import { ROOMS } from '@/data/rooms';
import { SITE_URL } from '@/lib/seo/canonical';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const coreRoutes = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { route: '/about', priority: 0.85, changeFrequency: 'monthly' as const },
    { route: '/rooms', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/facilities', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/experiences', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/contact', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/gallery', priority: 0.7, changeFrequency: 'weekly' as const },
    { route: '/privacy-policy', priority: 0.3, changeFrequency: 'monthly' as const },
    { route: '/terms-conditions', priority: 0.3, changeFrequency: 'monthly' as const },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${SITE_URL}${route}`,
    lastModified: currentDate,
    changeFrequency,
    priority,
  }));

  const roomRoutes = ROOMS.map((room) => ({
    url: `${SITE_URL}/rooms/${room.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...coreRoutes, ...roomRoutes];
}
