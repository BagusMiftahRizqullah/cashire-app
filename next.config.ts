/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/',  // Set to root-relative path
  trailingSlash: true, // Ensures URLs have trailing slashes
};

module.exports = nextConfig;
