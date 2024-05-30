/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		screens: {
			tablet: "640px",
			laptop: "1024px",
			desktop: "1490px",
			wideDesktop: "1440px",
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: "#313638",
					dark: "#bbbbbb", // Define the primary color for dark mode
				},
				background: {
					DEFAULT: "#f0f8ff",
					dark: "#313638",
				},
			},
		},
	},
	plugins: [],
};
