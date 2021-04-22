/* eslint-disable-next-line */
const { spacing, fontFamily, screens } = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './layouts/**/*.{ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans],
				mono: ['"Fira Code"', ...fontFamily.mono]
			},
			colors: {
				primary: {
					DEFAULT: '#0ba5f8'
				},
				body: {
					DEFAULT: '#071116'
				},
				code: {
					DEFAULT: '#222e38'
				}
			},
			typography: {
				DEFAULT: {
					css: {
						color: '#eeeeee',
						'h1,h2,h3,h4,h5,h6': {
							color: '#eeeeee',
							'scroll-margin-top': spacing[32]
						},
						a: {
							color: '#0ba5f8',
							'&:hover': {
								color: '#d6f1ff'
							}
						},
						blockquote: {
							color: '#eeeeee'
						},
						strong: {
							color: '#eeeeee'
						}
					}
				}
			},
			width: {
				120: '30rem'
			},
			scale: {
				102: '1.02'
			}
		},
		screens: {
			xs: '475px',
			...screens
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
};
