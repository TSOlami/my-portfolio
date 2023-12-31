/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	mode: "jit",
	theme: {
	  extend: {
			fontFamily: {
        'montserrat': ['Montserrat', 'serif'],
				'orbitron': ['Orbitron', 'sans-serif'],
      },
		dropShadow: {
			green: '0 0 10rem #29c26f',
		},
		colors: {
		  primary: "#A89078",
		  secondary: {
			50: "#faf5f0",
			100: "#f0e7dd",
			200: "#f0e1ce",
			300: "#e0d1be",
			400: "#d0c1ae",
		},
		  glass: "#6e6052",
		  tertiary: "#434343",
		  "black-100": "#100d25",
		  "black-200": "#090325",
		  "white-100": "#f3f3f3",
		},
		boxShadow: {
		  card: "0px 35px 120px -15px #f0e1ce",
		},
		screens: {
		  xs: "450px",
		},
	  },
	},
	plugins: [],
  };