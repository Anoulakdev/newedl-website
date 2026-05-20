/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uat-api.edl.com.la",
      },
      {
        protocol: "https",
        hostname: "app-api.edl.com.la",
      },
      {
        protocol: "https",
        hostname: "edl-inside-api.edl.com.la",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
