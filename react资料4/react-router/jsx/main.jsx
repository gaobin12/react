import React, { Component } from 'react';
import { render } from 'react-dom';
// 引入路由模块
import { Switch, HashRouter, Route, Redirect, Link } from 'react-router-dom';
// console.log(R)

// 定义组件
class App extends Component {
	render() {
		// 渲染虚拟DOM
		return (
			<div>
				<header>header part</header>
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
					<Route path="*" component={Home}></Route>
				</Switch>
			</div>
		)
	}
}
// 首页
class Home extends Component {
	render() {
		// 点击按钮，发布消息
		return <h1>home page</h1>
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

// 第二步 确定渲染路由方式
let routes = (
	<HashRouter>
		<App></App>
	</HashRouter>
)
// 第三步 渲染路由
render(routes, app)