/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				xs: '390px',
			},
			fontFamily: {
				secondary: ['Open Sans', 'sans-serif'],
			},
			colors: {
				primary: '#123',
				secondary: '#2b314f',
			},
		},
	},
	plugins: [],
}
