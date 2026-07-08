import type { NextConfig } from "next";

// GitHub Pages serves the site under /<repo-name>/, so the deploy workflow
// sets NEXT_PUBLIC_BASE_PATH to "/<repo-name>". Local dev leaves it empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
