// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';

// 定义子组件
class Child extends Component {
	// 子组件方法
	childMethod(e) {
		// console.log(e.target.value)
		// 将数据传递给父组件
		this.props.method(e.target.value)
	}
	render() {
		// 虚拟DOM
		return (
			<div>
				{/*作为事件回调函数执行*/}
				{/*<input type="text" onChange={this.props.method}/>*/}
				{/*在子组件方法中执行*/}
				{/*<input type="text" onChange={this.childMethod.bind(this)}/>*/}
				{/*箭头函数简化方法的定义*/}
				<input type="text" onChange={e => this.props.method(e.target.value)}/>
			</div>
		)
	}
}

// 定义父组件
class Parent extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 初始化状态
		this.state = {
			msg: ''
		}
	}
	// 传递的方法
	parentMethod(msg) {
		// console.log(e.target.value)
		// 修改状态
		// this.setState({
		// 	msg: e.target.value
		// })
		// console.log(111, e)
		this.setState({ msg })
	}
	render() {
		// 虚拟DOM
		return (
			<div>
				{/*1传递方法并绑定父组件*/}
				{/*<Child method={this.parentMethod.bind(this)}></Child>*/}
				{/*简化方法的定义*/}
				<Child method={msg => this.setState({ msg })}></Child>
				<h1>结果：{this.state.msg}</h1>
				{/*建议*/}
				<h1>{'结果：' + this.state.msg}</h1>
			</div>
		)
	}
}

// 渲染
render(<Parent></Parent>, app)