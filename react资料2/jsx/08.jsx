import React, { Component } from 'react';
import { render } from 'react-dom';

// 非约束性组件
// class Demo extends Component {
// 	// 事件回调函数
// 	showResult() {
// 		console.log(this.refs.color.value)
// 	}
// 	changeResult() {
// 		// 获取元素再修改
// 		this.refs.color.value = 'isBlue'
// 	}
// 	render() {
// 		// 虚拟DOM
// 		return (
// 			<div>
// 				<p>
// 					<select defaultValue="isGreen" ref="color">
// 						<option value="isRed">red</option>
// 						<option value="isGreen">green</option>
// 						<option value="isBlue">blue</option>
// 					</select>
// 				</p>
// 				<p>
// 					<button onClick={e => this.showResult(e)}>获取数据</button>
// 					<button onClick={e => this.changeResult(e)}>修改数据</button>
// 				</p>
// 			</div>
// 		)
// 	}
// }

// 约束性
class Demo extends Component {
	constructor(props) {
		super(props);
		// 初始化状态
		this.state = {
			color: 'isBlue'
		}
	}
	// 事件回调函数
	showResult() {
		console.log(this.state.color)
	}
	changeResult() {
		// 修改状态数据
		this.setState({ color: 'isRed' })
	}
	render() {
		// 虚拟DOM
		return (
			<div>
				<p>
					<select value={this.state.color} onChange={e => this.setState({ color: e.target.value })}>
						<option value="isRed">red</option>
						<option value="isGreen">green</option>
						<option value="isBlue">blue</option>
					</select>
				</p>
				<p>
					<button onClick={e => this.showResult(e)}>获取数据</button>
					<button onClick={e => this.changeResult(e)}>修改数据</button>
				</p>
			</div>
		)
	}
}

// 渲染组件
render(<Demo></Demo>, app)