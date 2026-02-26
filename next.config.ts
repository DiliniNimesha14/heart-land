import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  eslint: {
    // This will allow the build to finish even if the linter is unhappy
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
