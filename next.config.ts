import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    // emotion 지원 활성화
    emotion: true,
  },
  webpack:(config, {isServer})=>{
    if(!isServer){
      config.resolve.fallback={
        canvas:false, // 브라우저 환경에서 canvas 비활성화
      };
    }
    return config;
  }
};

export default nextConfig;
