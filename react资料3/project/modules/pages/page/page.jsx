import React, { Component } from 'react';
import axios from 'axios';

// 引入组件
import Banner from '../../components/banner/banner'
import Content from '../../components/content/content'

// 定义组件
export default class Page extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			data: []
		}
	}
	// 创建组件，发送请求
	componentWillMount() {
		// 请求数据
		axios.get(this.props.url)
			// 监听数据返回并存储数据
			.then(({ data }) => this.setState({ data }))
	}
	render() {
		// 解构属性数据
		let { title, intro, style } = this.props;
		return (
			<div style={{ display: style ? 'block' : 'none' }}>
				<Banner title={title} intro={intro}></Banner>
				<Content data={this.state.data}></Content>
			</div>
		)
	}
}
