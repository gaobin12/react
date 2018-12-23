module.exports = {
	// 入口文件
	entry: './jsx/main.jsx',
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
				// query和plugin不能一起使用
				// query: {
				// 	presets: ['es2015', 'react']
				// },
				// 配置选项
				options: {
					// babel插件
					presets: ['es2015', 'react'],
					// 插件
					plugins: [
						['import', {
							style: 'css',
							libraryName: 'antd-mobile'
						}]
					]
				}
			},
			// less
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			},
			// css
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	}
}