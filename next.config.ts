import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    // emotion 지원 활성화
    emotion: true,
  },
};

export default nextConfig;
