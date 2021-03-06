import React, { Component } from 'react';
import { render } from 'react-dom';
// 引入路由模块
import { Switch, HashRouter, Route, Redirect, Link } from 'react-router-dom';
// 引入redux
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';


// 创建actions
const ADD = 'ADD';
let addNum = { type: ADD, num: 5 };
// 定义reducer
function reducer(state = 0, action) {
	// 判断action
	switch (action.type) {
		case ADD:
			state += action.num;
	}
	// 返回state
	return state;
}
// 创建store
let store = createStore(reducer);

// 定义组件
class App extends Component {
	render() {
		console.log('app', this)
		// 解构
		let { state, dispatch } = this.props;
		// 渲染虚拟DOM
		return (
			<div>
				<Header num={state}></Header>
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
				<h3>num: {this.props.num}</h3>
			</div>
		)
	}
}
// 首页
class Home extends Component {
	render() {
		console.log(this)
		// 点击按钮，发布消息
		return <h1 onClick={e => this.props.dispatch(addNum)}>home page</h1>
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