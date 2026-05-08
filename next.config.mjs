/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // https://i.ibb.co/p6SfQMcq/antick.png
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/p6SfQMcq/**',
        search: 'antick chandra kuri',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
