import React, { Component } from 'react';
import './header.less'

export default class Header extends Component {
	render() {
		// console.log(this)
		// 渲染
		return (
			<div className="ickt-header">
				<div className="header-left" onClick={e => history.go(-1)}>
					<span className="arrow">
						<span className="arrow blue"></span>
					</span>
				</div>
				{/*优先渲染内容*/}
				<h1>{this.props.children || this.props.title}</h1>
				<div className="header-right" onClick={e => this.props.rightClick(e)}>{this.props.rightText}</div>
			</div>
		)
	}
}
// 默认属性
Header.defaultProps = {
	rightClick: () => {}
}