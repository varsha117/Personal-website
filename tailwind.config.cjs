/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#fefbfb',
				secondary: '#141414',
				pinkBlock: '#F9F2F2',
				blueBlock: '#F6FFFE',
			},
			screens: {
				'3xl': '1920px',
				// => @media (min-width: 1920px) { ... }
			},
		},
	},
	plugins: [],
}
