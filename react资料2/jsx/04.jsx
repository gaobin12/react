// 引入库
import React, { Component } from 'react';
import { render, findDOMNode } from 'react-dom';
import '../less/demo.less'

// 定义父组件
class Slider extends Component {
	// 定义状态
	constructor(props) {
		super(props);
		// 初始化状态
		this.state = {
			title: '网址导航'
		}
	}
	render() {
		// 使用子组件
		return (
			<div className="slider">
				{/*状态数据*/}
				<Gotop title={this.state.title}></Gotop>
			</div>
		)
	}
	// 监听页面滚动
	// componentDidMount() {
	// 	window.onscroll = () => {
	// 		// 如果距离顶部超过200像素，显示返回顶部
	// 		if (window.scrollY > 200) {
	// 			this.setState({
	// 				title: '返回顶部'
	// 			})
	// 		} else {
	// 			// 否则显示网址导航
	// 			this.setState({
	// 				title: '网址导航'
	// 			})
	// 		}
	// 	}
	// }
}

// 定义子组件
class Gotop extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		this.state = {
			// 外部的数据，存储在内部
			text: props.title
		}
	}
	// 1 组件即将接收新的属性数据
	componentWillReceiveProps(newProps) {
		console.log(111, 'componentWillReceiveProps', 'props', this.props, newProps)
		// 转换数据
		this.setState({
			// 新属性数据，赋值状态数据
			text: newProps.title
		})
	}
	// 2 组件是否应该更新
	shouldComponentUpdate(newProps, newState) {
		console.log(222, 'shouldComponentUpdate', 'props', this.props, newProps, 'state', this.state, newState)
		// 必须有返回值
		// return true;
		// return false
		// 判断属性数据或者状态数据是否发生改变
		return newProps.title !== this.props.title || newState.text !== this.state.text;
	}
	// 3 组件即将更新
	componentWillUpdate(newProps, newState) {
		console.log(333, 'componentWillUpdate', 'props', this.props, newProps, 'state', this.state, newState)
	}
	// 4 渲染虚拟DOM
	render() {
		console.log(444, 'render', 'props', this.props, 'state', this.state)
		// 简便写法
		// return <span>{this.props.title}</span>
		return <span>{this.state.text}</span>
	}
	// 5 组件更新完毕
	componentDidUpdate(oldProps, oldState) {
		console.log(555, 'componentDidUpdate', 'props', this.props, oldProps, 'state', this.state, oldState)
	}
	// 组件创建完成，订阅事件
	componentDidMount() {
		window.onscroll = () => {
			// 如果距离顶部超过200像素，显示返回顶部
			if (window.scrollY > 200) {
				this.setState({
					text: '返回顶部'
				})
			} else {
				// 否则显示网址导航
				this.setState({
					text: '网址导航'
				})
			}
		}
	}
}
// 渲染父组件
render(<Slider title="爱创课堂"></Slider>, app)