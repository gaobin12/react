module.exports = {
	// 入口
	entry: {
		'01': './jsx/01.jsx',
		'02': './jsx/02.jsx'
	},
	// 发布
	output: {
		filename: './dist/[name].js'
	},
	// 加载机
	module: {
		rules: [
			// es6
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}