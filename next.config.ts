import type { NextConfig } from "next";
import path from 'path'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /* merged static assets under public/ngo-banner-next */
   outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
