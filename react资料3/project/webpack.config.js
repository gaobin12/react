// 定义配置
module.exports = {
	// 不想添加拓展名
	resolve: {
		extensions: ['.jsx', '.js', '.es']
	},
	// 入口
	entry: './modules/main.jsx',
	// 发布
	output: {
		filename: './dist/index.js'
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
			// less
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			}
		]
	}
}