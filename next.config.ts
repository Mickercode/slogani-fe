import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Placeholder portrait photos (swap for the client's real photography).
      { protocol: "https", hostname: "randomuser.me", pathname: "/api/portraits/**" },
      // Optional: contextual stock photos.
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
