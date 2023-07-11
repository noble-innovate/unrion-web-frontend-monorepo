/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './src/i18n.js'
);

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@packages/ui'],
  images: {
    domains: ['unrion-website-mages.s3*amazonaws.com'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unrion-website-mages.*.**.amazonaws.com',
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
