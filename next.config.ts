// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {};
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack(config: any, { dev, isServer }: any) {
    config.watchOptions = {
      ignored: ["**/node_modules", "**/.next", "**/Application Data"],
    };
    return config;
  },
};

export default nextConfig;
