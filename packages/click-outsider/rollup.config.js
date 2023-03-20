import typescriptPlugin from '@rollup/plugin-typescript'
// rollup.config.js
export default {
	input: 'src/index.ts',
	output: {
		file: 'bundle.js',
		format: 'iife',
        name:'clickOutsider'
	},
	plugins: [typescriptPlugin()]
};