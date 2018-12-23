import React, { Component, createElement } from 'react';
import { render } from 'react-dom';

// 定义一份数据
var data = ['爱奇艺高清', '优酷网', '百度视频']

// 定义组件
class Header extends Component {
	// 定义属性方法
	renderList() {
		// 将上面的数组映射成下面的数组
		// return data.map((item, index) => {
		// 	return <li>{item}</li>
		// })
		// 省略函数体
		// 循环中，一定要设置key属性
		return data.map((item, index) => <li key={index}>{item}</li>)
		// return [
		// 	<li>教你理财</li>,
		// 	<li>天猫购物季</li>,
		// 	<li>热门房源</li>
		// ]
	}
	render() {
		// 标题
		var title = '爱创课堂';
		var info = '<span style="color: red">hello</span>';
		return (
			<div>
				{/*设置ref属性，获取元素*/}
				<h1 ref="ickt">{title}</h1>
				{/*危险的方式设置内容*/}
				<h1 dangerouslySetInnerHTML={{ __html: info }}></h1>
				{/*<ul>
					{[
						<li>教你理财</li>,
						<li>天猫购物季</li>,
						<li>热门房源</li>
					]}
				</ul>*/}
				{/*将数组拿出去，此时显得很整洁*/}
				<ul>{this.renderList()}</ul>
			</div>
		)
	}
	// 组件创建完成
	componentDidMount() {
		console.log(this, this.refs.ickt)
		// 设置样式
		this.refs.ickt.style.color = 'red'
	}
}

// 渲染
render(<Header />, app)