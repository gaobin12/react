// 配置
module.exports = {
	// 更改拓展名
	resolve: {
		extensions: ['.js', '.jsx']
	},
	// 入口
	entry: './src/index.jsx',
	// 发布
	output: {
		filename: './build/main.js'
	},
	// 模块
	module: {
		// 加载机
		rules: [
			// jsx加载机
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