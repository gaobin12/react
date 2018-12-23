import React, { Component } from 'react';
// 引入aside和article
import Article from '../article/article';
import Aside from '../aside/aside';
import './content.less';

// 定义组件
export default class Content extends Component {
	render() {
		return (
			<div className="app-content container">
				<Article data={this.props.data}></Article>
				<Aside data={this.props.data}></Aside>
			</div>
		)
	}
}