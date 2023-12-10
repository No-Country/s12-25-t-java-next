/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'bucket-prueba-dif.s3.amazonaws.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'fakeimg.pl',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				port: '',
				pathname: '/**',
			},
		],
	},
}

module.exports = nextConfig
