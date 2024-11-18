/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    eslint: {
      ignoreDuringBuilds: true, // Disables ESLint during build
    },
    typescript: {
      ignoreBuildErrors: true, // Ignores TypeScript errors during build
    },
  };
  