import React, { Component } from 'react';
import { render } from 'react-dom';
// 使用element-react
import { Button, Alert, Tag } from 'element-react';
// 引入样式
import 'element-theme-default'

// 定义组件
class App extends Component {
	render() {
		return (
			<div>
				<h1>hello</h1>
				<Button type="success">hello</Button>
				<Button type="info">hello</Button>
				<Button type="warning">hello</Button>
				<Button type="danger">hello</Button>
				<Alert title="爱创课堂" description="专业前端培训学校" closeText="hello"></Alert>
				<Tag type="gray">标签二</Tag>
			</div>
		)
	}
}

// 渲染应用程序
render(<App></App>, app)