/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 This enables static HTML export (required for IONOS)

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // 👈 Required if you're using <Image> without optimization
  },
}

export default nextConfig
