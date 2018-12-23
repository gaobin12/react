module.exports = {
	// 入口
	entry: {
		'01': './jsx/01.jsx',
		'02': './jsx/02.jsx',
		'03': './jsx/03.jsx',
		'04': './jsx/04.jsx',
		'05': './jsx/05.jsx',
		'06': './jsx/06.jsx',
		'07': './jsx/07.jsx',
		'08': './jsx/08.jsx',
		'09': './jsx/09.jsx',
		'10': './jsx/10.jsx',
		'11': './jsx/11.jsx'
	},
	// 发布
	output: {
		filename: './dist/[name].js'
	},
	// 模块
	module: {
		// 加载机
		rules: [
			// jsx 和 es, 或者重新定义es加载机
			{
				test: /\.(es|jsx)$/,
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