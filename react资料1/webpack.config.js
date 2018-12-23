module.exports = {
	entry: {
		'01': './es/01.es',
		'02': './es/02.es',
		'03': './jsx/03.jsx',
		'04': './jsx/04.jsx',
		'05': './jsx/05.jsx',
		'06': './jsx/06.jsx',
		'07': './jsx/07.jsx',
		'08': './jsx/08.jsx',
		'09': './jsx/09.jsx',
		'10': './jsx/10.jsx'
	},
	output: {
		filename: './dist/[name].js'
	},
	module: {
		rules: [
			// es6
			{
				test: /\.es$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			// jsx文件
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