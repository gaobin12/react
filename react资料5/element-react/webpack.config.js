// 配置
module.exports = {
	entry: './jsx/main.jsx',
	output: {
		filename: './dist/main.js'
	},
	// 模块
	module: {
		// 加载机
		rules: [
			// jsx
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
			// es6
			{
				test: /\.es$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			// less
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			},
			// css加载机
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			// 字体文件
			{
				test: /\.(ttf|woff)$/,
				loader: 'url-loader'
			}
		]
	}
}