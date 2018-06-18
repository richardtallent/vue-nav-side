// vue.config.js
module.exports = {
	configureWebpack: () => {
		if (process.env.NODE_ENV === "production") {
			return { output: { publicPath: "./" } }
		}
	},
}
