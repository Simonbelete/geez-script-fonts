/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  output: "export",
  distDir: "docs",
  basePath: "/github-pages",
};

module.exports = nextConfig;
