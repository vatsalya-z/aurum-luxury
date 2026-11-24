export const SITE_URL = 'https://aurumhotelskashmir.com';

/**
 * Normalizes and formats an absolute canonical URL for any given site route.
 * Guarantees consistent HTTPS, non-www domain, no trailing slash (except root).
 */
export function getCanonicalUrl(path: string = '/'): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (cleanPath === '/' || cleanPath === '') {
    return SITE_URL;
  }
  // Strip trailing slash if present for consistency
  const trimmed = cleanPath.endsWith('/') ? cleanPath.slice(0, -1) : cleanPath;
  return `${SITE_URL}${trimmed}`;
}
