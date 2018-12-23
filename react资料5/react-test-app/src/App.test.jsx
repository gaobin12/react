import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 引入测试虚拟DOM模块
import { shallow } from 'enzyme';
// 引入文件
import { sum } from './util/util';

// 整体描述
describe('我们进行单元测试', () => {
	// 定义生命周期方法
	// 模拟的组件
	let wrapper;
	// 每个单测执行前
	beforeEach(() => {
		// console.log('beforeEach')
		wrapper = shallow(<App></App>)
	})
	// // 每个单测执行后
	afterEach(() => {
		// console.log('afterEach')
		// 每次测试完，将该模拟的组件注销掉
		wrapper.unmount();
	})
	// // 所有单测执行前
	// beforeAll(() => {
	// 	console.log('before all')
	// })
	// // 所有单测执行后
	// afterAll(() => {
	// 	console.log('after all')
	// })
	// 定义单元测试
	it('测试sum方法是否能够得到正确结果', () => {
		// 执行表达式
		expect(sum(2, 3))
			// 是否等于4
			.toBe(5)
	})
	it('测试字面量', () => {
		expect({color: 'red'})
			// 是否字面量相等
			.toEqual({color: 'red'})
	})
	it('正则测试', () => {
		expect('hello')
			// 是否以hello开头
			.toMatch(/^hello/)
	})
	it('数组是否包含某个成员', () => {
		expect([1, 2, 3])
			// 是否包含2
			.toContain(2)
	})
	it('测试组件', () => {
		// 模拟一个组件
		// let wrapper = shallow(<App></App>);
		// 是否包含h1元素
		expect(wrapper.contains(<h1 className="App-title">Welcome to React</h1>)).toBe(true)
	})
	it('是否可以找到某个组件', () => {
		expect(wrapper.find('.App-header'))
			// 是否具有，就看长度是几
			.toHaveLength(1)
	})
	it('判断组件的className属性', () => {
		// props获取所有属性
		expect(wrapper.props().className)
			.toBe('App')
		// console.log(wrapper.props())
	})
})

// it('renders without crashing', () => {
// 	const div = document.createElement('div');
// 	ReactDOM.render(<App />, div);
// 	ReactDOM.unmountComponentAtNode(div);
// });

