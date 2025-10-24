/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    contentDispositionType: "inline",
  },
  async headers() {
    return [
      {
        source: "/:path*\\.(png|jpg|jpeg|webp|gif|svg|avif)",
        headers: [
          { key: "Content-Disposition", value: "inline" },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
