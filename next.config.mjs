/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["drive.google.com", "terabox.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        // port: "",
        // pathname: "/file/d/**/preview",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        // port: "",
        // pathname: "/file/d/**/preview",
      },
    ],
  },
};

export default nextConfig;
