import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['skipit.ro', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'skipit.ro',
        port: '',
        pathname: '/storage/**',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
