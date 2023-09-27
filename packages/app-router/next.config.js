/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,

  output: 'standalone',
  experimental: {
    serverActions: true,
  },
  headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'e2e-headers',
            value: 'next.config.js',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
