/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   images: {
  //     unoptimized: true
  //   }
  // },
  env: {
    api: '/api'
  },
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true
  },
  trailingSlash: true
};

module.exports = nextConfig;
