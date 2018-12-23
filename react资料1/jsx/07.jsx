import React, { Component } from 'react';
import { render } from 'react-dom';
// 引入属性约束模块
import PropTypes from 'prop-types';
console.log(PropTypes)

// 定义组件
class Nav extends Component {
	// static get color() {
	// 	return 'red'
	// }
	// 创建列表的方法
	createList() {
		// 根据属性数据创建
		return this.props.data.map((item, index) => <li key={index}>{item}</li>)
	}
	render() {
		console.log(this)
		return (
			<div>
				{/*创建列表*/}
				<ul>{this.createList()}</ul>
			</div>
		)
	}
}
// 在类的外部，定义静态属性
// Nav.num = 100;
// 定义静态属性数据
Nav.defaultProps = {
	data: ['默认数据']
}
// 约束性数据
Nav.propTypes = {
	num: PropTypes.number.isRequired,
	// num: PropTypes.bool
	// data是数据，必填
	data: PropTypes.array.isRequired
}
// 静态属性只有组件类能够使用
// console.log(Nav.color, Nav.num)

// 渲染
render(<Nav num={100} data={['教你理财', '天猫购物季', '热门房源']} />, app)
// 渲染第二组导航
render(<Nav num={0} data={['天猫', '当当网', '1号店']}></Nav>, app2)
// 渲染第三组导航
render(<Nav num={20}></Nav>, app3)