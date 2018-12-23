import React, { Component } from 'react';
import { render } from 'react-dom';

// 定义组件
class Header extends Component {
	render() {
		// 标题
		var title = '爱创课堂';
		var date = new Date();
		// 返回值就是渲染的虚拟DOM
		// 属性上也可以使用插值语法
		return (
			<div>
				{// 单行注释
				}
				{/* 多行注释
				 */}
				{/*多行注释更常用*/}
				<div title={title}>{title + ' color'.toUpperCase()}</div>
				<div>{date.getFullYear()}</div>
			</div>
		)
	}
}

// 渲染
render(<Header />, app)