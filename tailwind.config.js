/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{js,jsx,ts,tsx,html}"
	],
	theme: {
		extend: {
			colors: {
				"color": {
					"100": "#aea7a3",
					"200": "#959595",
					"300": "#525254",
					"400": "#363636",
					"500": "#242323",
					"600": "#131212",
				}
			},
			fontFamily: {
				"minecraft": ["MinecraftFont"],
			}
		},
	},
	plugins: [],
}

