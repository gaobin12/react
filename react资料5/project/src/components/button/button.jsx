import React, { Component } from 'react';
import './button.less';

// 定义组件
export default class Button extends Component {
	render() {
		let cls = [
			'ickt-btn', 
			'btn-' + this.props.type, 
			this.props.block ? ' btn-block' : '',
			this.props.className 
		];
		return <span 
			className={cls.join(' ')} 
			onClick={e => this.props.click(e)}
		>{this.props.children}</span>
	}
}
Button.defaultProps = {
	type: 'info',
	click: () => {},
	className: ''
}