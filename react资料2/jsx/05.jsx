// 引入react
import React, { Component } from 'react';
// render
import { render } from 'react-dom';
// 引入axios
import axios from 'axios';
// 引入样式
import '../less/01.less';

// 定义组件
class Skin extends Component {
	// 渲染
	render() {
		// console.log(this.state.data)
		// 返回虚拟DOM
		return (
			<div className="skin">
				<h1>hello</h1>
			</div>
		)
	}
	// 销毁期方法
	componentWillUnmount() {
		console.log(this, arguments)
	}
}

// 渲染
render(<Skin></Skin>, app)
// 2秒之后渲染其他虚拟DOM
setTimeout(() => {
	render(<h1>爱创课堂</h1>, app)
}, 2000)

