/** @type {import('next').NextConfig} */

/* const nextConfig = {}

module.exports = nextConfig */

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          // hostname: '*-zpcloud.zdn.vn',
          hostname: '*.zdn.vn',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'scontent.*',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: '*google*',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }