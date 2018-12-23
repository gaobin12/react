// 引入库
import React, { Component } from 'react';
import axios from 'axios';
// 引入卡片组件
import Card from '../../components/card/card';

// 定义组件并暴露接口
export default class Home extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 初始化状态
		this.state = {
			data: []
		}
	}
	// 组件创建前请求数据
	componentWillMount() {
		// 请求数据
		axios.get('data/list.json')
			// 监听数据返回
			.then(({ data }) => this.setState({ data }))
	}
	// 遍历状态数据，创建卡片视图
	createList() {
		// 像卡片组件传递数据
		return this.state.data.map((item, index) => {
			// 数据中应该有一个正确的链接地址
			item.link = '/detail/' + item.id;
			return <Card key={index} data={item}></Card>
		})
	}
	// 渲染
	render() {
		return (
			<div className="app-home">{this.createList()}</div>
		)
	}
}