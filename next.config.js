module.exports = {
	future: {
		webpack5: true
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: securityHeaders
			}
		];
	}
};

// https://securityheaders.com
const ContentSecurityPolicy = `
	default-src 'self';
	img-src 'self' blob: data: https://www.google-analytics.com;
	script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com data:;
	style-src 'self' 'unsafe-inline' fonts.googleapis.com fonts.gstatic.com;
	font-src 'self' fonts.googleapis.com fonts.gstatic.com;
	object-src 'self';
	manifest-src 'self';
	connect-src *;
`;

const securityHeaders = [
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
	{
		key: 'Content-Security-Policy',
		value: ContentSecurityPolicy.replace(/\n/g, '')
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
	{
		key: 'X-Frame-Options',
		value: 'DENY'
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff'
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on'
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
	{
		key: 'Strict-Transport-Security',
		value: 'max-age=31536000; includeSubDomains; preload'
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
	// Opt-out of Google FLoC: https://amifloced.org/
	{
		key: 'Permissions-Policy',
		value: 'camera=(), microphone=(), geolocation=()'
	}
];
