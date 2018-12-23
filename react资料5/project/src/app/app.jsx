// 引入库
import React, { Component } from 'react';
// 引入路由
import { Switch, Route, Redirect } from 'react-router-dom';
// 引入header组件
import Header from '../components/header/header'
// 引入页面
import Home from '../pages/home/home';
import Detail from '../pages/detail/detail';
import Comments from '../pages/comments/comments';
// 默认样式
import './app.less';

// 定义组件
export default class App extends Component {
	render() {
		// 返回虚拟DOM
		return (
			<div>
				<Header title="爱创课堂新闻平台" rightText="登录" rightClick={e => console.log('success')}></Header>
				{/*1 定义路由渲染位置*/}
				<Switch>
					{/*首页*/}
					<Route path="/home" component={Home}></Route>
					{/*详情页*/}
					<Route path="/detail/:id" component={Detail}></Route>
					{/*评论页*/}
					<Route path="/comments/:id" component={Comments}></Route>
					{/*路由重定向*/}
					<Redirect from="*" to="/home"></Redirect>
				</Switch>
			</div>
		)
	}
}