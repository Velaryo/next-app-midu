/** @type {import('next').NextConfig} */
const nextConfig = {
  // para permitir uso de rutos
  // nueva forma
  experimental: {
    appDir: true
  },
  images: {
    domains: ['api.dicebear.com']
  },
  reactStrictMode: true
}

module.exports = nextConfig
