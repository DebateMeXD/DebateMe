const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose", "@typegoose/typegoose"],
    serverMinification: false,
  },
  output: "standalone",
};

module.exports = withPWA(nextConfig);
