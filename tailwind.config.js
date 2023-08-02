module.exports = {
	content: [
		'./src/index.html',
		'./src/index.tsx',
		'./src/App.tsx',
		'./src/components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			screens: {
				mobile: '375px',
				tablet: '834px',
				desktop: '1440px',
			},
			colors: {
				black: '#000000',
				white: '#ffffff',
				orange: {
					DEFAULT: '#FA793C',
					dark: '#F14D00',
				},
				gray: {
					light: '#D9D9D9',
					DEFAULT: '#787878',
				},
			},
			fontFamily: {
				abeezee: 'ABeeZee',
				kanit: 'Kanit',
				pridi: 'Pridi',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [''],
}
