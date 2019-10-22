/** @format */
/**
 * External dependencies
 */
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

const webpackConfig = {
	...defaultConfig,
	entry: {
		...defaultConfig.entry,
		editor: './src/editor.js',
	},
	plugins: [],
};

module.exports = webpackConfig;
