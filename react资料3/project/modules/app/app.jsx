import React, { Component } from 'react';
// 引入模块
// import Header from '../components/header/header'
import Header from '../components/header'
// 引入页面
import Home from '../pages/home/home'
// import Start from '../pages/start/start'
// import Css from '../pages/css/css'
// 抽象页面组件
import Page from '../pages/page/page';
// 引入属性约束模块
// import PropTypes from 'prop-types';
import './app.less';

// 创建应用程序组件
export default class App extends Component {
	// 构造函数中
	constructor(props) {
		super(props);
		// 将外部的转化成内部
		this.state = {
			[props.page]: true
		}
	}
	// 获取选中的页面
	getChoosePage() {
		// 遍历state
		for (let key in this.state) {
			// 如果是true，就是被选中的页面
			// key表示页面的名称
			if (this.state[key]) {
				return key
			}
		}
	}
	// 父组件方法，切换页面
	parentMethod(page) {
		// console.log(page)
		// 排他法切换页面
		let state = this.state;
		// 清空页面
		for (let key in state) {
			// 清空
			state[key] = false
		}
		// console.log(this, state, page)
		// 设置显示的页面
		state[page] = true;
		// 更新状态
		this.setState(state)
	}
	render() {
		// 解构状态中的数据
		let { home, start, css, component, js, marker } = this.state;
		return (
			<div>
				{/*头部*/}
				{/*父组件向子组件通信，传递选中的页面*/}
				{/*切换页面是一个典型的子组件向父组件通信模型*/}
				{/*传递方法，一定要绑定父组件实例化对象*/}
				<Header choosePage={this.getChoosePage()} method={this.parentMethod.bind(this)}></Header>
				<Home style={home}></Home>
				{/*<Start style={start}></Start>*/}
				{/*<Css style={css}></Css>*/}
				<Page style={start} title="起步" intro="简要介绍 Bootstrap，以及如何下载、使用，还有基本模版和案例，等等。" url="data/start.json"></Page>
				<Page style={css} title="全局 CSS 样式" intro="设置全局 CSS 样式；基本的 HTML 元素均可以通过 class 设置样式并得到增强效果；还有先进的栅格系统。" url="data/css.json"></Page>
				{/*component页面*/}
				<Page style={component} title="组件" intro="无数可复用的组件，包括字体图标、下拉菜单、导航、警告框、弹出框等更多功能。" url="data/component.json"></Page>
				<Page style={js} title="JavaScript 插件" intro="jQuery 插件为 Bootstrap 的组件赋予了“生命”。可以简单地一次性引入所有插件，或者逐个引入到你的页面中。" url="data/js.json"></Page>
				{/*marker页面*/}
				<Page style={marker} title="定制并下载 Bootstrap" intro="通过自定义 Bootstrap 组件、Less 变量和 jQuery 插件，定制一份属于你自己的 Bootstrap 版本吧。" url="data/marker.json"></Page>
			</div>
		)
	}
}
// 属性约束
// App.propTypes = {
// 	// 是字符串，必填
// 	page: PropTypes.string.isRequired
// }
// 默认属性
App.defaultProps = {
	page: 'home'
}