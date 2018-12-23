// 引入库
import React, { Component } from 'react';
// 引入axios
import axios from 'axios';
// 引入组件
import Button from '../../components/button/button';
import IComment from '../../components/i-comment/i-comment';
// 引入样式
import './comments.less'

// 定义组件并暴露接口
export default class Comments extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			id: 0,
			list: [],
			msg: ''
		}
	}
	// 组件创建完成请求数据
	componentDidMount() {
		// 请求数据
		this.getData()
	}
	// 获取数据
	getData() {
		// 请求数据
		axios.get('data/comment.json?id=' + this.props.match.params.id)
			// 监听数据返回并存储
			.then(({ data }) => this.setState(data))
	}
	// 如果组件更新完毕，如果路由中的id改变了，我们也要请求数据
	componentDidUpdate(oldProps, oldState) {
		// id改变
		if (this.props.match.params.id !== oldProps.match.params.id) {
			// 请求数据
			this.getData();
		}
	}
	// 渲染评论列表
	createList() {
		// 根据list数据渲染
		return this.state.list.map((item, index) => <IComment key={index} data={item}></IComment>)
	}
	// 提交数据
	submitData() {
		// 获取textarea数据就是获取状态数据
		let content = this.state.msg;
		// 判断数据是否合法
		if (/^\s*$/.test(content)) {
			// 不合法提示用户，
			alert('请输入内容')
			return;
		}
		// 获取当前时间
		let now = new Date();
		// 拼凑提交的数据
		let data = {
			content,
			user: '雨夜清荷',
			time: `刚刚 ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
		}
		// 理论上我们提交数据，应该发送post请求
		axios.post('data/addComment.json', data)
			// 监听数据返回
			.then(res => {
				// 评论提交成功
				if (res.data.errno === 0) {
					// 更新状态数据
					// 状态数据
					let list = this.state.list;
					// 添加数据
					// list.push(data)
					// 前面插入
					list.unshift(data)
					// 更新状态
					this.setState({ 
						list,
						// 清空输入的内容
						msg: ''
					})
				}
			})
		// console.log(data)
	}
	// 渲染
	render() {
		return (
			<div className="app-comments">
				<div className="container">
					{/*回去实现非约束性*/}
					<textarea value={this.state.msg} onChange={e => this.setState({ msg: e.target.value })} placeholder="文明上网，理性发言！"></textarea>
					<Button click={e => this.submitData()}>提交</Button>
				</div>
				<div className="list">{this.createList()}</div>
			</div>
		)
	}
}