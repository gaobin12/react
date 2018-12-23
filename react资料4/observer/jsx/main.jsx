import React, { Component } from 'react';
import { render } from 'react-dom';

// 定义观察者模式
let Observer = {
	// 消息管道
	msg: {},
	// 订阅消息
	on(type, fn) {
		// 存储消息
		if (this.msg[type]) {
			this.msg[type].push(fn)
		} else {
			// 新建该消息管道
			this.msg[type] = [fn]
		}
	},
	// 发布消息
	trigger(type, ...args) {
		// 如果存在该消息
		if (this.msg[type]) {
			// 遍历消息并逐一执行
			this.msg[type].forEach(item => {
				// item表示数组中每一个成员函数
				item(...args)
			})
		}
	}
}

// 定义组件
class App extends Component {
	render() {
		// 渲染虚拟DOM
		return (
			<div>
				<button onClick={e => Observer.trigger('countNum', 2)}>减少2</button>
				<AddNum></AddNum>
				<ShowNum></ShowNum>
			</div>
		)
	}
}
// 增加5的按钮
class AddNum extends Component {
	render() {
		// 点击按钮，发布消息
		return <button onClick={e => Observer.trigger('addnum', 5, 100, 'hello')}>增加5</button>
	}
}
// 展示数字
class ShowNum extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		this.state = {
			num: 0
		}
	}
	render() {
		return <h1>num: {this.state.num}</h1>
	}
	// 组件创建完成订阅事件
	componentDidMount() {
		// 订阅事件
		Observer.on('addnum', (num, ...args) => {
			// console.log(args)
			// 更新状态
			this.setState({
				num: this.state.num + num
			})
		})
		// 订阅消息
		Observer.on('countNum', num => this.setState({ 
			num: this.state.num - num 
		}))
	}
}

// 渲染组件
render(<App></App>, app)