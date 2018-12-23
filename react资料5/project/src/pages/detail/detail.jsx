// 引入库
import React, { Component } from 'react';
import axios from 'axios';
// 引入组件
import Button from '../../components/button/button'
// 引入样式
import './detail.less';

// 定义组件并暴露接口
export default class Detail extends Component {
	// 构造函数中
	constructor(props) {
		super(props);
		// 初始化状态
		this.state = {
			data: {}
		}
	}
	// 请求数据
	componentWillMount() {
		// console.log(this)
		// 获取数据
		this.getData(this.props.match.params.id);
	}
	// 获取数据的方法
	getData(id) {
		// 请求数据
		// axios.get(`data/detail.json?id=${this.props.match.params.id}`)
		axios.get(`data/detail.json?id=${id}`)
			// 监听数据返回，并存储数据
			.then(({ data }) => this.setState({ data }))
	}
	// 组件更新优化
	// shouldComponentUpdate(newProps, newState) {
		// 在这里判断是有问题的
	// 	// 属性更新了或者状态更新了，要执行
	// 	console.log(this.props.match.params.id !== newProps.match.params.id , this.state.data !== newState.data)
	// 	return this.props.match.params.id !== newProps.match.params.id || this.state.data !== newState.data;
	// }
	// 方案一 组件更新完毕，请求新的数据
	// componentDidUpdate(oldProps) {
	// 	// 如果属性改变了，我们发送请求
	// 	if (this.props.match.params.id !== oldProps.match.params.id) {
	// 		// 获取数据
	// 		this.getData();
	// 	}
	// }
	// 方案二 只有属性改变的时候，请求数据，存在期第一个阶段方法会执行
	componentWillReceiveProps(newProps) {
		if (this.props.match.params.id !== newProps.match.params.id) {
			// 获取数据
			this.getData(newProps.match.params.id);
		}
	}
	// 状态改变的时候，更新
	shouldComponentUpdate(newProps, newState) {
		return newState.data !== this.state.data
	}
	// 渲染
	render() {
		// 缓存数据
		let data = this.state.data;
		return (
			<div className="app-detail">
				<h1>{data.title}</h1>
				<p className="info">
					<span className="time">{data.time}</span>
					<span className="comments">{'评论:' + data.comment}</span>
				</p>
				<img src={data.img} alt=""/>
				<p className="content" dangerouslySetInnerHTML={{ __html: data.content }}></p>
				<Button className="detail-btn" block type="info" click={e => location.hash="#/comments/" + data.id}>查看更多评论</Button>
				{/*<Button block type="success">按钮</Button>
				<Button block type="danger">按钮</Button>
				<Button block type="warning">按钮</Button>*/}
			</div>
		)
	}
}