// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    appDir: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
    tsconfigPath: './tsconfig.json',
  },
  images: {
    formats: ['image/webp'],
  },
  webpack: (config) => {
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}

module.exports = nextConfig
