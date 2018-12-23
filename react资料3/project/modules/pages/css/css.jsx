// 引入混合类
import Start from '../start/start';

// 定义组件类
export default class Css extends Start {
	// 重写构造函数
	constructor(props) {
		super(props);
		this.state = {
			title: '全局 CSS 样式',
			intro: '设置全局 CSS 样式；基本的 HTML 元素均可以通过 class 设置样式并得到增强效果；还有先进的栅格系统。',
			data: [],
			url: 'data/css.json'
		}
	}
}

// // 引入类库
// import React, { Component } from 'react';
// import axios from 'axios';
// // 引入组件
// import Banner from '../../components/banner/banner';
// import Content from '../../components/content/content';

// // 定义组件类
// export default class Css extends Component {
// 	// 构造函数
// 	constructor(props) {
// 		super(props);
// 		// 状态
// 		this.state = {
// 			title: '全局 CSS 样式',
// 			intro: '设置全局 CSS 样式；基本的 HTML 元素均可以通过 class 设置样式并得到增强效果；还有先进的栅格系统。',
// 			data: []
// 		}
// 	}
// 	// 请求数据
// 	componentWillMount() {
// 		// 发送请求
// 		axios.get('data/css.json')
// 			// 监听返回
// 			.then(({ data }) => this.setState({ data }))
// 	}
// 	render() {
// 		// 解构状态数据
// 		let { title, intro, data } = this.state;
// 		return (
// 			<div style={{ display: this.props.style ? 'block' : 'none' }}>
// 				<Banner title={title} intro={intro}></Banner>
// 				<Content data={data}></Content>
// 			</div>
// 		)
// 	}
// }