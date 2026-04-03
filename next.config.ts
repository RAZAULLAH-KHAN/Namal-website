import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/Namal-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
