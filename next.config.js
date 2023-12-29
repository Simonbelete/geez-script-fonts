/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  output: "export",
  distDir: "docs",
  basePath: "/geez-script-fonts",
};

module.exports = nextConfig;
