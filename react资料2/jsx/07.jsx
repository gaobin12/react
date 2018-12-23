import React, { Component } from 'react';
import { render } from 'react-dom';

// 定义组件
class Demo extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 初始化状态
		this.state = {
			username: '爱创',
			password: true
		}
	}
	// 事件回调函数
	showResult() {
		// 获取状态值
		console.log(this.state)
	}
	changeResult() {
		// 修改状态值
		this.setState({
			username: '爱创课堂',
			password: false
		})
	}
	// 修改用户名
	changeUserName(e) {
		// 获取元素的值
		let username = e.target.value;
		// 长度不能查过8位
		if (username.length > 8) {
			// 不要更新了
			return;
		}
		// 可以更新状态
		this.setState({ username })
	}
	// 修改密码
	changePassowrd(e) {
		// 获取数据
		let password = e.target.checked;
		// 更新状态
		this.setState({
			password
		})
	}
	render() {
		// 解构状态
		let { username, password } = this.state;
		// 虚拟DOM
		return (
			<div>
				<p>
					<label>用户名</label>
					{/*默认值要绑定状态*/}
					{/*<input type="text" value={this.state.username}/>*/}
					<input type="text" onChange={e => this.changeUserName(e)} value={username}/>
				</p>
				<p>
					<label>是否设置密码</label>
					{/*<input type="checkbox" checked={this.state.password}/>*/}
					{/*<input type="checkbox" onChange={e => this.changePassowrd(e)} checked={password}/>*/}
				{/*对于简单的数据更新，可以直接在箭头函数内完成*/}
					<input type="checkbox" onChange={e => this.setState({ password: e.target.checked })} checked={password}/>
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