/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable Webpack disk packfile caching in development on Windows
      // This eliminates "ENOENT: no such file or directory, stat ...\10.pack.gz" crashes and chunk 500 errors
      config.cache = false;
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hg-static.hyperguest.com',
      },
      {
        protocol: 'https',
        hostname: 'wrjxnelcpxhfnesrzqpr.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'www.staypattern.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
