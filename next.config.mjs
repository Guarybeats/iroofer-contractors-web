/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export works for Cloudflare Pages; if you deploy to Vercel/Node you can drop this.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8100"
  }
};

export default nextConfig;
