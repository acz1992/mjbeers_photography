/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		/*  fontFamily: {
			primary: "",
			secondary: "",
			tertiary: "", */
		screens: {
			tablet: "640px",
			// => @media (min-width: 640px)
			// { ... }

			laptop: "1024px",
			// => @media (min-width: 1024px)
			// { ... }

			desktop: "1490px",
			// => @media (min-width: 1280px)
			// { ... }

			wideDesktop: "1440px",
			// => @media (min-width: 1440px)
			// { ... }
		},
		extend: {
			colors: {
				primary: "black",
				secondary: "",
				background: "#f0f8ff",
			},
		},
		plugins: [],
	},
};
