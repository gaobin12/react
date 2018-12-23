import React, { Component } from 'react';
// 引入axios
import axios from 'axios';
// 引入content和banner
import Content from '../../components/content/content';
import Banner from '../../components/banner/banner';

// 定义组件
export default class Start extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			title: '起步',
			intro: '简要介绍 Bootstrap，以及如何下载、使用，还有基本模版和案例，等等。',
			// 获取的数据
			data: [],
			// 将请求地址抽象出来
			url: 'data/start.json'
		}
	}
	// 我们既可以在componentWillMount中发送，也可以在componentDidMount中发送
	componentWillMount() {
		// 请求数据
		// axios.get('data/start.json')
		// 	请求状态中的地址
		axios.get(this.state.url)
			// 监听返回
			.then(({ data }) => this.setState({ data }))
	}
	render() {
		// 解构
		let { title, intro, data } = this.state;
		return (
			<div className="app-start" style={{ display: this.props.style ? 'block' : 'none'  }}>
				<Banner title={title} intro={intro}></Banner>
				<Content data={data}></Content>
			</div>
		)
	}
}
