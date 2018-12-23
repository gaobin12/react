import React, { Component } from 'react';
import { render } from 'react-dom';

// 定义组件
class Demo extends Component {
	// 事件回调函数
	showResult() {
		// 获取元素，再获取值
		console.log(this.refs.username.value)
		console.log(this.refs.password.checked)
	}
	changeResult() {
		// 获取元素再修改value或者checked
		this.refs.username.value = '专业前端培训学校';
		this.refs.password.checked = false;
	}
	render() {
		// 虚拟DOM
		return (
			<div>
				<p>
					<label>用户名</label>
					{/*非约束性组件中，默认值通过defaultValue或者defaultChecked*/}
					{/*设置ref属性*/}
					<input type="text" ref="username" defaultValue="爱创课堂"/>
				</p>
				<p>
					<label>是否设置密码</label>
					<input type="checkbox" ref="password" defaultChecked/>
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