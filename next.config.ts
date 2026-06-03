import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/lumio-portfolio",
  assetPrefix: "/lumio-portfolio/",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
};

export default nextConfig;
