/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com"],
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
