// 引入库
import React, { Component } from 'react';
import { render, findDOMNode } from 'react-dom';

// 定义父组件
class Slider extends Component {
	// 定义状态
	constructor(props) {
		super(props);
		// 初始化状态
		this.state = {
			info: '专业前端培训学校'
		}
	}
	render() {
		let title = 'hello'
		// 使用子组件
		return (
			<div>
				{/*传递变量固定值*/}
				{/*<Gotop title={title}></Gotop>*/}
				{/*属性数据*/}
				{/*<Gotop title={this.props.title}></Gotop>*/}
				{/*状态数据*/}
				{/*<Gotop title={this.state.info}></Gotop>*/}
				{/*传递方法*/}
				{/*父组件中绑定this*/}
				{/*<Gotop title={title} method={this.parentMethod}></Gotop>*/}
				<Gotop title={title} method={this.parentMethod.bind(this, 200)}></Gotop>
			</div>
		)
	}
	// 父组件方法
	parentMethod() {
		console.log('parent', this, 111, arguments)
	}
}

// 定义子组件
class Gotop extends Component {
	render() {
		// console.log(this)
		// 虚拟DOM
		/*return <span onClick={this.props.method.bind(this, 100)}>{this.props.title}</span>*/
		// return <span onClick={this.childMethod.bind(this)}>{this.props.title}</span>
		// 简便写法
		return <span onClick={e => this.props.method(300, e)}>{this.props.title}</span>
	}
	// 子组件方法
	childMethod(e) {
		console.log(this, arguments)
		// console.log(this.props)
		// 子组件方法中，执行父组件方法
		this.props.method(true, e, 100);
	}
}
// 渲染父组件
render(<Slider title="爱创课堂"></Slider>, app)