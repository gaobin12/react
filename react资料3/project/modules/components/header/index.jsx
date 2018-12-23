import React, { Component } from 'react';
import './index.less';
// div.app-header.navbar.navbar-static-top>div.container>(div.navbar-header>a.navbar-brand{Bootstrap})+(ul.navbar-nav.nav.nav-pills.pull-right>li>a{Bootstrap中文网})+ul.navbar-nav.nav.nav-pills>(li>a)*6

// 定义组件
export default class Header extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 将外部属性数据，转换成内部状态数据
		this.state = {
			// 选中的页面，属性值为'choose'
			[this.props.choosePage]: 'choose'
		}
	}
	// 切换页面
	changePage(page) {
		// console.log(page)
		// 排他法，设置样式
		// 获取样式类
		let state = this.state;
		// 清空类
		for (let key in state) {
			// 清空
			state[key] = ''
		}
		// 为page页面，添加choose
		state[page] = 'choose';
		// 更新状态
		this.setState(state)
		// 这种方式不能将原来的清空
		// let state = {[page]: 'choose'};
		// this.setState(state)
		// 子组件执行方法，并且传递数据
		this.props.method(page)
	}
	render() {
		// console.log(this.props)
		// 解构数据
		let { home, start, css, js, component, marker } = this.state;
		// 虚拟DOM
		return (
			<div className="app-header navbar navbar-static-top">
				<div className="container">
					<div className="navbar-header">
						<a href="javascript:void(0)" className="navbar-brand" onClick={e => this.changePage('home', e)}>Bootstrap</a>
					</div>
					<ul className="navbar-nav nav nav-pills pull-right">
						<li>
							<a href="">Bootstrap中文网</a>
						</li>
					</ul>
					<ul className="navbar-nav nav nav-pills">
						<li className={start} data-id="home" onClick={e => this.changePage('start', e)}>
							<a href="javascript:void(0)">起步</a>
						</li>
						<li className={css} onClick={e => this.changePage('css', e)}>
							<a href="javascript:void(0)">全局 CSS 样式</a>
						</li>
						<li className={component} onClick={e => this.changePage('component', e)}>
							<a href="javascript:void(0)">组件</a>
						</li>
						<li className={js} onClick={e => this.changePage('js', e)}>
							<a href="javascript:void(0)">JavaScript 插件</a>
						</li>
						<li className={marker} onClick={e => this.changePage('marker', e)}>
							<a href="javascript:void(0)">定制</a>
						</li>
						<li>
							<a href="">网站实例</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}





