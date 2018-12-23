// 引入库
import React, { Component } from 'react';
import { render, findDOMNode } from 'react-dom';

// 定义组件
class Gotop extends Component {
	// 2 初始化状态数据
	constructor(props) {
		// 构造函数继承
		super(props);
		console.log(2, 'constructor', props, this.props, this.state)
		// 初始化
		this.state = {
			text: props.title
		}
	}
	// 3 组件即将创建
	componentWillMount() {
		console.log(3, 'componentWillMount', this.props, this.state, findDOMNode(this))
	}
	// 4 渲染虚拟DOM
	render() {
		console.log(4, 'render', this.props, this.state)
		// 虚拟DOM
		return <span>{this.props.title}</span>
	}
	// 5 组件渲染完成
	componentDidMount() {
		console.log(5, 'componentDidMount', this.props, this.state, findDOMNode(this))
	}
}

// 1 默认属性数据
Gotop.defaultProps = {
	title: '返回顶部'
}

// 渲染组件
render(<Gotop></Gotop>, app)