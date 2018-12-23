import React, { Component } from 'react';
// 引入antd-mobile组件
import { WhiteSpace, WingBlank, Flex, Calendar } from 'antd-mobile';
import './layout.less';

// 无状态组件
const Block = props => <div className="block">Block</div>

// 定义组件并暴露接口
export default class Layout extends Component {
	render() {
		return (
			<div>
				{/*前后留白*/}
				<WhiteSpace size="lg"></WhiteSpace>
				{/*左右留白*/}
				<WingBlank>
					<span>hello</span>
				</WingBlank>
				{/*flex布局组件*/}
				<Flex justify="center">
					<Block></Block>
					<Block></Block>
					<Block></Block>
				</Flex>
				{/*日历组件*/}
				<Calendar visible={true}></Calendar>
			</div>
		)
	}
}