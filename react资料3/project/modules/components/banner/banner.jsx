import React, { Component } from 'react';
// 引入样式
import './banner.less';

// 定义组件
export default class Banner extends Component {
	render() {
		return (
			<div className="app-banner">
				<div className="container">
					<h1>{this.props.title}</h1>
					<p>{this.props.intro}</p>
				</div>
			</div>
		)
	}
}