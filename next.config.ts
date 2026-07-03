import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export', // Tells Next.js to generate static HTML/CSS/JS
  basePath: isProd ? '/portfolio-spardano' : '', 
  assetPrefix: isProd ? '/portfolio-spardano/' : '',
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js default image optimization
  },
};

export default nextConfig;