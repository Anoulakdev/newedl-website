/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['uat-api.edl.com.la', 'app-api.edl.com.la', 'edl-inside-api.edl.com.la'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  // images: {
  //   domains: ['10.200.10.29'],
  // },
  reactStrictMode: false,
}

module.exports = nextConfig
