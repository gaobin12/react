// 引入组件类
import React, { Component, createElement } from 'react';
// 引入渲染库
import { render } from 'react-dom';

// console.log(React)
// 定义组件类
class Demo extends Component {
	// render方法，用来渲染输出虚拟DOM
	render() {
		return createElement(
			'ul', 
			null,
			createElement('li', null, '教你理财'),
			createElement('li', null, '天猫购物季'),
			createElement('li', null, '热门房源')
		)
	}
}

// 使用组件之前，要将组件转换成虚拟DOM
var demo = createElement(Demo)
// console.log(demo)
// 渲染组件
// render(demo, document.getElementById('app'))
// 每个具有id的元素，我们可以通过id名称，获取这个元素
render(demo, app)