// const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: '/Portfolio',
  basePath: '/Portfolio',
  output: 'export'
};

export default nextConfig;