import React, { Component } from 'react';
import { render } from 'react-dom';

// 无状态组件，可以简写成函数
// const Demo = () => (<button>按钮</button>)

// 定义有状态组件
class Demo extends Component {
	// 构造函数
	constructor(props) {
		// 构造函数继承
		super(props);
		// console.log(this.props, props)
		// 定义状态参数
		this.state = {
			// 默认显示第一个
			num: 0
		}
	}
	// 渲染列表
	createList() {
		// 获取数据列表长度
		let len = this.props.data.length;
		// 根据属性数据，将视图创建出来
		return this.props.data.map((item, index) => (
			<li key={index} style={{
				// 显示第num个
				display: this.state.num % len === index ? 'block' : 'none'
			}}>{this.createChildrenList(item)}</li>
		))
	}
	// 渲染字列表
	createChildrenList(item) {
		// 遍历参数数据，并返回视图结果
		return item.map((childItem, index) => <span key={index}>{childItem}</span>)
	}
	// 改变显示的成员
	change() {
		// var num = this.state.num;
		// // 修改状态数据
		// this.setState({
		// 	num: num + 1
		// })
		// 合并成一句话
		this.setState({
			num: ++this.state.num
		})
	}
	// 渲染
	render() {
		return (
			<div>
				<span onClick={e => this.change()}>换一换</span>
				<ul>{this.createList()}</ul>
			</div>
		)
	}
}

// 渲染
render(<Demo data={[
	['人民币中间价上调', '双11消费提示'],
	['货车与火车相撞', '石智勇破世界纪录'],
	['日本大型无人潜艇', '陈妍希拍婚纱照']
]}></Demo>, app)

render(<Demo data={[
	['海上聚众黄赌毒'],
	['最严遛狗规定'],
	['苹果新机砍单']
]}></Demo>, app2)