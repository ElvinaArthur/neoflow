// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  // Note: serverExternalPackages a remplacé serverComponentsExternalPackages
  serverExternalPackages: ["@prisma/client", "bcryptjs"],
};

module.exports = nextConfig;
