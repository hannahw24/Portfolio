/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	reactStrictMode: true,
	images: {
		unoptimized: true, // Disable default image optimization
	},
	assetPrefix: '/Portfolio',
	basePath: '/Portfolio',
	output: 'export',
	turbopack: {
		root: import.meta.dirname,
	},
};

export default nextConfig;
