const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Inter var', ...defaultTheme.fontFamily.sans]
		}
	},
	plugins: []
}

module.exports = config
