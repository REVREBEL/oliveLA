// next.config.ts
import type { NextConfig } from "next";
import BuilderDevTools from "@builder.io/dev-tools/next";
import path from "path";

const nextConfig: NextConfig = BuilderDevTools()({
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
});

export default nextConfig;
