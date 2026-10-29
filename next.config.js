/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // produces a static ./out folder you can deploy anywhere
  reactStrictMode: true,
  poweredByHeader: false,
  images: { unoptimized: true }, // required for static export
  trailingSlash: true, // clean static routes (/pricing/ -> pricing/index.html)
}

export default nextConfig
