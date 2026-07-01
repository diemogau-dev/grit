/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Formatos modernos para mejor performance (Lighthouse)
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
