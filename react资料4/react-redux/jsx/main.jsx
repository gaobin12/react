import React, { Component } from 'react';
import { render } from 'react-dom';
// 引入库
import { createStore } from 'redux';
// 引入react-redux
import { Provider, connect } from 'react-redux';
// console.log(A)

// 定义消息类型
const ADD = 'ADD';
const COUNT = 'COUNT';
// 定义消息对象
let addNum5 = { type: ADD, num: 5 }
let countNum2 = { type: COUNT, num: 2 }
// 定义reducer
function reducer(state = 0, action) {
	// 判断消息类型
	switch (action.type) {
		// 判断
		case ADD:
			return state += action.num;
			// 或者写break
		case COUNT:
			state -= action.num;
			break;
	}
	return state;
}
// 定义store
let store = createStore(reducer)

// 创建store

// 定义组件
class App extends Component {
	render() {
		console.log(123, this)
		// 解构属性数据
		let { dispatch, num, addNum } = this.props;
		// 渲染虚拟DOM
		return (
			<div>
				<button onClick={e => dispatch(countNum2)}>减少2</button>
				<AddNum dispatch={dispatch} addNum={addNum}></AddNum>
				{/*<ShowNum num={num}></ShowNum>*/}
				{/*拓展后的组件*/}
				<DealShowNum></DealShowNum>
			</div>
		)
	}
}
// 增加5的按钮
class AddNum extends Component {
	// 发布消息
	sendMsg() {
		this.props.dispatch(addNum5)
	}
	render() {
		console.log('addNum', this)
		// 点击按钮，发布消息
		return (
			<div>
				<button onClick={this.sendMsg.bind(this)}>增加5</button>
				<button onClick={e => this.props.dispatch({ type: ADD, num: 10 })}>增加10</button>
				{/*简化我们的消息发布*/}
				<button onClick={e => this.props.addNum(100)}>增加100</button>
				<button onClick={e => this.props.addNum(1000)}>增加1000</button>
			</div>
		)
	}
}
// 展示数字
class ShowNum extends Component {
	render() {
		console.log('showNum', this)
		return <h1>num: {this.props.num}</h1>
	}
}

// 渲染组件
// render(<App></App>, app)

// 定义组件如何接收store数据
// 如何接收state数据
function mapStateToProps(state) {
	// 返回值表示拓展给属性的对象
	return {
		num: state,
		color: 'red'
	}
}
// 如果接收dispatch方法
function mapDispatchToProps(dispatch) {
	// 返回值表示高拓展给属性的对象
	return {
		dispatch,
		demo() {},
		// 简化发送addNum的消息
		addNum(num) {
			dispatch({ type: ADD, num })
		}
	}
}
// 创建拓展组件的函数
const dealFn = connect(mapStateToProps, mapDispatchToProps);
// 拓展App组件
const DealApp = dealFn(App);
// 拓展ShowNum组件
const DealShowNum = dealFn(ShowNum);
// 为app提供store对象
// 渲染该组件
render((
	<Provider store={store}>
		<DealApp></DealApp>
	</Provider>	
), app)
