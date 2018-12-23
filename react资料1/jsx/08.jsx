import React, { Component } from 'react';
import { render } from 'react-dom';

// 定义对象
let obj = {
	color: 'red'
}

// 定义组件
class Demo extends Component {
	// 点击按钮事件回调函数
	clickBtn(e) {
		console.log(arguments, e.target, e.currentTarget, this)
	}
	render() {
		return (
			<div>
				{/*绑定DOM事件*/}
				<button onClick={this.clickBtn}>按钮</button>
				<button onClick={this.clickBtn.bind(this, 100, 'red', true)}>按钮1</button>
				{/*省略箭头函数的函数体*/}
				<button onClick={e => this.clickBtn(200, e, 'green', false)}>按钮2</button>
				{/*react不建议，将this指向组件实例化对象之外的对象*/}
				<button onClick={this.clickBtn.bind(obj)}>按钮3</button>
			</div>
		)
	}
}

// 渲染
render(<Demo></Demo>, app)