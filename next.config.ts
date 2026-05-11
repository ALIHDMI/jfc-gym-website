import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/jfc-gym-website",
  assetPrefix: "/jfc-gym-website/",
  distDir: "output",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
