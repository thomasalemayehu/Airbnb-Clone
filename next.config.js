/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com"],
    loader: "akamai",
    path: "",
  },
  env: {
    mapBoxPublicKey:
      "pk.eyJ1IjoidGhvbWFzYWxlbWF5ZWh1IiwiYSI6ImNsNWkwY3RjdTAzamUzY3BhOGd4cHVmb2EifQ.kXaXfrOXxg39ATl5SJIeRw",
  },
};

module.exports = nextConfig;
