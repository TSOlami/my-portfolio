/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	mode: "jit",
	theme: {
	  extend: {
		dropShadow: {
			green: '0 0 10rem #29c26f',
		},
		colors: {
		  primary: "#A89078",
		  secondary: {
			50: "#faf5f0",
			100: "#f0e7dd",
			200: "#f0e1ce",
		},
		  tertiary: "#151030",
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