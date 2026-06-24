/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/services", destination: "/Services", permanent: true },
      { source: "/about", destination: "/About", permanent: true },
      { source: "/contact", destination: "/Contact", permanent: true },
    ];
  },
};

export default nextConfig;
