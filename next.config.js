// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "**.sanity.io",
//         port: "",
//         pathname: "/images/**",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"]
  }
}

module.exports = nextConfig
