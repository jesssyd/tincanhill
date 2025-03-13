import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "scontent-yyz1-1.xx.fbcdn.net",
      port: "",
      pathname: "/v/**",
    }]
  }
};

export default nextConfig;
