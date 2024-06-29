/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				comein: {
					'0%': { left: '-100%' },
					'100%': { left: "0" },
				},
				goout: {
					'0%': { left: '0' },
					'100%': { left: "-100%" },
				}
			},
			animation: {
				comein: 'comein 0.75s ease-in-out',
				goout: 'goout 0.75s ease-in-out'
			}
		},
	},
	plugins: [],
	darkMode: "class"
}
