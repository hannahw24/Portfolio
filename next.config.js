// const isProd = process.env.NODE_ENV === 'production';

import { type } from 'os';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.(svg|pdf)$/,
			use: ['@svgr/webpack', 'file-loader'],
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
