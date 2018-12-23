// 引入react
import React, { Component } from 'react';
// render
import { render } from 'react-dom';
// 引入axios
import axios from 'axios';
// 引入样式
import '../less/01.less';

// 定义组件
class Skin extends Component {
	// 构造函数
	constructor(props) {
		// 构造函数继承
		super(props);
		// 初始化状态
		this.state = {
			data: []
		}
	}
	// 事件回调函数
	chooseItem(id, e) {
		// console.log(e.target, e.currentTarget)
		// console.log(id, e.currentTarget.getAttribute('data-id'))
		// 设置背景
		document.body.style.backgroundImage = `url(img/skin/big_${id}.jpg)`
	}
	// 创建列表的方法
	createList() {
		return this.state.data.map((item, index) => (
			<li key={index} data-id={item.id} onClick={e => this.chooseItem(item.id, e)}>
				<img src={'img/skin/' + item.src} alt=""/>
				<p>{item.title}</p>
			</li>
		))
	}
	// 渲染
	render() {
		// console.log(this.state.data)
		// 返回虚拟DOM
		return (
			<div className="skin">
				<div className="container">
					<ul>{this.createList()}</ul>
				</div>
			</div>
		)
	}
	// 组件创建完成的时候
	componentDidMount() {
		// 发送请求
		axios.get('data/skin.json')
			// 监听数据返回
			// .then(({ data }) => console.log(data))
			.then(({ data }) => this.setState({ data }))
	}
}

// 渲染
render(<Skin></Skin>, app)

