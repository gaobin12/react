import React, { Component } from 'react';
import { render } from 'react-dom';
import ImageZoom from '../image-zoom.es';

// 使用放大器插件
// new ImageZoom(app, './demo.jpg', 200)
// 定义组件
class Demo extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			url: './demo.jpg',
			width: 200
		}
	}
	render() {
		return (
			<div>
				<div className="container" ref="container"></div>
				<div>
					<img src={this.state.url} width="50" height="50" alt=""/>
				</div>
			</div>
		)
	}
	// 组件创建完成
	componentDidMount() {
		// 使用插件
		new ImageZoom(this.refs.container, this.state.url, this.state.width)
	}
}

// 渲染组件
render(<Demo></Demo>, app)