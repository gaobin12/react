import React, { Component } from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

// 定义组件
class Demo extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			news: ["网瘾真的可以戒吗?", "lol解说当场被开除", "快刀切水果"]
		}
	}
	// 创建新闻列表
	createList() {
		// return this.state.news.map((item, index) => <li key={index}>{item}</li>)
		return this.state.news.map((item, index) => <li style={{
				background: 'orange'
			}} key={index}>{item}</li>)
	}
	render() {
		return (
			<div>
				<ul>{this.createList()}</ul>
			</div>
		)
	}
	// 组件创建完成
	componentDidMount() {
		// 2秒之后请求了新的数据
		setTimeout(() => {
			this.setState({
				news: ["承认骗局！这理论创始人被判罚1.05亿", "台湾\"电竞\"队赢了日本 结局却尴尬了", "马化腾曝出新招：要准备开发VR版微信", "中国离婚率连涨15年 女性越来越\"敢离\"", "姑娘发现\"家里有矿\" 但都是给弟弟的"]
			})
		}, 2000)
		// $('li').css({
		// 	background: 'green'
		// })
	}
	// 存在期更新结束，再次修改样式
	componentDidUpdate() {
		// $('li').css({
		// 	background: 'green'
		// })
	}
}

// 渲染组件
render(<Demo></Demo>, app)