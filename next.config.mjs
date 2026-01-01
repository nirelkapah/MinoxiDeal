import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  i18n: {
    locales: ["he"],
    defaultLocale: "he",
  },
  experimental: {
    mdxRs: true,
  },
  webpack: (config) => {
    config.externals.push('markdown-wasm');
    return config;
  },
};

export default withContentlayer(nextConfig);
