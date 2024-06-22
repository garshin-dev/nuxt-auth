import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
	future: {
		hoverOnlyWhenSupported: true
	},
	theme: {
		colors: {
			white: '#fff',
			black: '#000',
			blue: '#1258E3'
		}
	},
	content: ['./src/**/*.{vue, ts}'],
}