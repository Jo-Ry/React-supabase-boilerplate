const autoprefixer = require("autoprefixer");

module.exports = () => {
	return {
		plugins: [
			// autoprefixer adds vendor prefixes like -webkit , -moz , and -ms to CSS rules.
			autoprefixer(),
		],
	};
};