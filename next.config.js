/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_SCRIPT_URL: process.env.GOOGLE_SCRIPT_URL,
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,POST,OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type" },
        ],
      },
    ];
  },
  output: 'export',
  distDir: 'out',
};

module.exports = nextConfig;
