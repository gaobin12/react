// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';

// 定义组件类
class Demo extends Component {
	// 渲染
	render() {
		return (
			<ul>
				<li>教你理财1</li>
				<li>天猫购物季1</li>
				<li>热门房源1</li>
			</ul>
		)
	}
}
// 将组件转化成虚拟DOM
// createElement(Demo)
// xhtml支持但标签，也支持双标签
var demo = <Demo></Demo>
// <Demo />
render(demo, app)