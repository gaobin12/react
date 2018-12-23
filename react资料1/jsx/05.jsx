import React, { Component, createElement } from 'react';
import { render } from 'react-dom';

// 定义组件
class Header extends Component {
	render() {
		// 标题
		var title = '爱创课堂';
		return (
			<div>
				<div style={{
					color: 'red',
					backgroundColor: 'green'
				}}>{title}</div>
				<h1 className="demo">{title}</h1>
				<label htmlFor="username">用户名</label>
				<input id="username" type="text"/>
			</div>
		)
	}
}

// 渲染
render(<Header />, app)
// js语法中，style属性是也是对象

// render(createElement('h1', {
// 	style: {
// 		color: 'red'
// 	}
// }, 'hello'), app)