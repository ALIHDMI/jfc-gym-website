import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  distDir: "output",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
