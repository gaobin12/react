import React, { Component } from 'react';
import { render } from 'react-dom';
// 引入路由模块
import { Switch, HashRouter, Route, Redirect, Link } from 'react-router-dom';
// 引入redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
// 引入路由reducer
import { routerReducer } from 'react-router-redux';
// 引入中间件
import thunkMiddleware from 'redux-thunk';
// 引入异步请求模块
import axios from 'axios';
// console.log(thunkMiddlewave)
// import * as A from 'redux'

// 创建actions
const ADD = 'ADD';
const MSG = 'MSG';
let addNum = { type: ADD, num: 5 };
let hello = { type: MSG, msg: 'hello' };
// // 动态action
// function numAction(num) {
// 	// 根据参数，拼接完成的action对象
// 	return { type: ADD, num }
// }
// function msgAction(msg) {
// 	return { type: MSG, msg }
// }
// 定义reducer
function reducer(state = { num: 0, msg: '' }, action) {
	// 定义处理的数据
	let obj = {};
	// 判断action
	switch (action.type) {
		case ADD:
			obj.num = state.num + action.num;
			break;
		case MSG: 
			obj.msg = action.msg;
			break;
	}
	// 返回state
	// 最终我们要将obj和state合并在一个新的对象中，再返回
	return Object.assign({}, state, obj);
}
// 安装中间件，拓展createStore方法
const newCreateStore = applyMiddleware(thunkMiddleware)(createStore)

// 用newCreateStore创建的store对象，就可以使用异步action
let store = newCreateStore(combineReducers({
	routerReducer,
	ickt: reducer
}));

// 定义组件
class App extends Component {
	render() {
		console.log('app', this)
		// 解构
		let { state, dispatch } = this.props;
		// 渲染虚拟DOM
		return (
			<div>
				<Header state={state}></Header>
				{/*路由导航*/}
				<Link to="/">首页</Link>
				<Link to="/list/1">列表页</Link>
				<Link to="/detail/2">详情页</Link>
				{/*第一步 确定路由渲染位置*/}
				<Switch>
					{/*定义每一条规则*/}
					{/*<Route path="/home" component={Home}></Route>*/}
					<Route path="/list/:page" component={List}></Route>
					<Route path="/detail/:id" component={Detail}></Route>
					{/*输入ickt进入detail/ickt*/}
					<Redirect from="/ickt" to="detail/ickt"></Redirect>
					{/*首页是默认路由*/}
					{/*<Route path="*" component={Home}></Route>*/}
					{/*渲染具有store数据的DealHome组件*/}
					<Route path="*" component={DealHome}></Route>
				</Switch>
			</div>
		)
	}
}
class Header extends Component {
	render() {
		console.log(this)
		return (
			<div>
				<header>header part</header>
				{/*此时使用多个reducer，已经对state切割，所以访问原来的数据，要加上命名空间*/}
				{/*<h3>num: {this.props.state.ickt}</h3>*/}
				<h3>num: {this.props.state.ickt.num}</h3>
				<h3>msg: {this.props.state.ickt.msg}</h3>
			</div>
		)
	}
}
// 动态action
function numAction(num) {
	// 根据参数，拼接完成的action对象
	return { type: ADD, num }
}
function msgAction(msg) {
	return { type: MSG, msg }
}
// 异步action
function msgActionAsync(num) {
	// console.log(arguments)
	// 返回函数中的参数是dispatch
	return dispatch => {
		// console.log(dispatch)
		// 发送请求, 请求时，我们还可以添加参数
		axios.get('data/demo.json?num=' + num)
			// 监听数据返回, 发布同步消息
			.then(({ data }) => dispatch(msgAction(data.msg)))
	}
}
// 首页
class Home extends Component {
	// 获取数据的方法
	getData() {
		// 发送请求
		axios
			.get('data/demo.json')
			// 监听数据返回, 向reducer发布消息，更新数据
			.then(({ data }) => this.props.dispatch(msgAction(data.msg)))
	}
	render() {
		console.log(this)
		// 点击按钮，发布消息
		return (
			<div>
				<h1>home page</h1>
				{/*发布动态消息*/}
				<button onClick={e => this.props.dispatch(numAction(5))}>增加5</button>
				<button onClick={e => this.props.dispatch(numAction(10))}>增加10</button>
				<button onClick={e => this.props.dispatch(msgAction('爱创课堂'))}>显示信息</button>
				<button onClick={e => this.getData()}>请求数据</button>
				<button onClick={e => this.props.dispatch(msgActionAsync(10))}>异步请求数据</button>
				{/*<button onClick={e => this.props.dispatch(addNum)}>增加5</button>
				<button onClick={e => this.props.dispatch(hello)}>显示信息</button>*/}
			</div>
		)
	}
}
// 列表页
class List extends Component {
	render() {
		// 点击按钮，发布消息
		return <h1>list page</h1>
	}
}
// 详情页
class Detail extends Component {
	render() {
		console.log(this)
		// 点击按钮，发布消息
		return (
			<div>
				<h1>detail page</h1>
				<Demo params={this.props.match.params} location={this.props.location}></Demo>
			</div>
		)
	}
}
class Demo extends Component {
	render() {
		console.log('demo', this)
		return <h2>demo page</h2>
	}
}

// 拓展属性
function mapStateToProps(state) {
	return { state }
}
function mapDispatchToProps(dispatch) {
	return { dispatch }
}
// 拓展方法
const dealFn = connect(mapStateToProps, mapDispatchToProps);
// 拓展组件
const DealApp = dealFn(App)
// 拓展Home页面组件
const DealHome = dealFn(Home);


// 1 通过Route引入DealApp
let routes = (
	<HashRouter>
		{/*<App></App>*/}
		{/*通过Route组件，引入DealApp*/}
		<Route path="/" component={DealApp}></Route>
	</HashRouter>
)
// 2 在Provider中，渲染路由规则
render((
	<Provider store={store}>
		{routes}
	</Provider>
), app)