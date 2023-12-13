const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			// Orange
			primary: {
				100: '#FF6711',
				200: '#D9560C',
				300: '#FF8B4A',
				400: '#FFE5D6',
			},
			// Blue
			secondary: {
				100: '#1F58C6',
				200: '#D9560C',
				300: '#5582D9',
			},
			// yellow
			tertiary: {
				100: '#FFBE2A ',
				200: '#E7A000',
				300: '#FFCA51',
			},
			black: '#1A1818',
			font: '#1A1A1A',
			white: '#FFF',
			darkgrey: '#5D5D5D',
			grey: '#9F9F9F',
			lightgrey: '#D9D9D9',
			whitebackground: '#F4F4F4',
			whiteAdminBackground: '#FBFBFB',
			whiteSidebar: '#F6F5F5',
			error: '#FF3B30',
			inactive: '#3C3C3C',
		},
		extend: {
			fontFamily: {
				sans: ['var(--font-montserrat)', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			boxShadow: {
				button: '0px 4px 4px rgba(0, 0, 0, 0.25)',
				buttoncart: '0px 2px 5px 2px rgba(0, 0, 0, 0.09)',
				footer: '0px 0px 16px 1px rgba(0, 0, 0, 0.25)',
				card: '0px 4px 10px 0px  rgba(0, 0, 0, 0.25)',
				form: '0px 2px 16px 7px  rgba(0, 0, 0,0.25)',
			},
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
}
