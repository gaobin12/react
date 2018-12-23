module.exports = {
	// 入口文件
	entry: './es/main.es',
	// 发布的文件
	output: {
		filename: './dist/main.js'
	},
	// 模块
	module: {
		// 加载机
		rules: [
			// es6
			{
				test: /\.es$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			// jsx
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
			// less
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			}
		]
	}
}