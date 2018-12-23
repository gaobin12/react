import React, { Component } from 'react';
// 样式
import './aside.less';

// 定义组件
export default class Aside extends Component {
	// 创建列表
	createList() {
		return this.props.data.map((item, index) => (
			<li key={index}>
				<a href={'#' + item.id}>{item.title}</a>
			</li>
		))
	}
	render() {
		return (
			<div className="app-aside">
				<ul>{this.createList()}</ul>
			</div>
		)
	}
}
// 默认属性数据
Aside.defaultProps = {
	data: []
}