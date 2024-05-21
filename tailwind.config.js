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
				max: '1921px',
			},
			fontFamily: {
				secondary: ['Open Sans', 'sans-serif'],
			},
			colors: {
				primary: '#fdf4db',
				secondary: '#2b314f',
				third: '#be9466',
			},
			animation: {
				'spin-slow': 'spin 15s linear infinite',
			},
		},
	},
	plugins: [],
}
