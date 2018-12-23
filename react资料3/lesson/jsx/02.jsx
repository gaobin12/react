import React, { Component } from 'react';
import { render } from 'react-dom';

// 定义一个子组件
class Child extends Component {
	render() {
		// 2 子组件执行方法，并传递数据
		return <input type="text" onChange={e => this.props.methods(e.target.value)} />
	}
}
// 定义另一个子组件
class Other extends Component {
	render() {
		return <h1>{this.props.msg}</h1>
	}
}
// 定义父组件
class Parent extends Component {
	// 定义状态
	constructor(props) {
		super(props);
		// 初始化状态
		this.state = {
			msg: ''
		}
	}
	render() {
		return (
			<div>
				{/*1 父组件向子组件传递方法*/}
				{/*3 更新状态*/}
				<Child methods={ msg => this.setState({ msg }) }></Child>
				{/*4 父组件将数据传递给另外一个组件*/}
				<Other msg={this.state.msg}></Other>
			</div>
		)
	}
}
// 渲染
render(<Parent></Parent>, app)