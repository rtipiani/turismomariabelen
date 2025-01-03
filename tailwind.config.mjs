/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#130746',
				secondary: '#211263',
				info: '#301a7e'
			},
			fontFamily: {
				cookies: 'Cookies',
				covereds: 'Covereds',
				dots: 'Dots',
				homes: 'Homes',
				greats: 'Greats',
				winters: 'Winters'
			}
		},
	},
	plugins: [],
}
