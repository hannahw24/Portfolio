// const isProd = process.env.NODE_ENV === 'production';
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
	reactStrictMode: true,
	images: {
		unoptimized: true, // Disable default image optimization
	},
	assetPrefix: '/Portfolio',
	basePath: '/Portfolio',
	output: 'export',
};

export default nextConfig;
