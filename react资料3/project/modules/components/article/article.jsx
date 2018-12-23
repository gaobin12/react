import React, { Component } from 'react';
import './article.less';

// 定义组件
export default class Article extends Component {
	// 创建列表
	createList() {
		return this.props.data.map((item, index) => (
			<li key={index} id={item.id}>
				<h2>{item.title}</h2>
				<p>{item.content}</p>
			</li>
		))
	}
	render() {
		return (
			<div className="app-article">
				<ul>{this.createList()}</ul>
			</div>
		)
	}
}

// 默认数据
Article.defaultProps = {
	data: []
}