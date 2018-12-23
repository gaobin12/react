// 引入库
import React, { Component } from 'react';
// 引入样式
import './i-comment.less';

// 定义组件
export default class IComment extends Component {
	render() {
		// console.log(this)
		// 缓存数据
		let data = this.props.data;
		return (
			<div className="ickt-icomment">
				<h3>{data.user}</h3>
				<p>{data.content}</p>
				<span>{data.time}</span>
			</div>
		)
	}
}