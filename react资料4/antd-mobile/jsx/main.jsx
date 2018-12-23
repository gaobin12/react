import React, { Component } from 'react';
// 引入组件
import Layout from './layout.jsx';
import { render } from 'react-dom';

// 定义组件
class App extends Component {
	render() {
		// 渲染虚拟DOM
		return (
			<div>
				<Layout></Layout>
			</div>
		)
	}
}
// 第三步 渲染路由
render(<App></App>, app)