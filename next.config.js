/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable persistent caching in development
      config.cache = false;
    }
    return config;
  },
};

module.exports = nextConfig;