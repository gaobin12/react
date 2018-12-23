import React, { Component } from 'react';
import { render } from 'react-dom';


// 约束性
// class Demo extends Component {
// 	constructor(props) {
// 		super(props);
// 		// 初始化状态
// 		this.state = {
// 			color: ['isRed', 'isBlue']
// 		}
// 	}
// 	// 事件回调函数
// 	changeColor(e) {
// 		// console.log(e.target.value)
// 		// console.log(e.target.options)
// 		let options = e.target.options;
// 		// 定义结果
// 		let color = [];
// 		// 遍历options
// 		for (var i = 0; i < options.length; i++) {
// 			// 找到选中的选项
// 			if (options[i].selected) {
// 				// 如果被选中，要存储value属性
// 				color.push(options[i].value);
// 			}
// 			// console.log(options[i].value, options[i].selected)
// 		}
// 		// 更新状态
// 		this.setState({ color })
// 	}
// 	showResult() {
// 		console.log(this.state.color)
// 	}
// 	changeResult() {
// 		this.setState({
// 			color: ['isRed', 'isGreen']
// 		})
// 	}
// 	render() {
// 		// 虚拟DOM
// 		return (
// 			<div>
// 				<p>
// 					<select multiple value={this.state.color} onChange={e => this.changeColor(e)}>
// 						<option value="isRed">red</option>
// 						<option value="isGreen">green</option>
// 						<option value="isBlue">blue</option>
// 					</select>
// 				</p>
// 				<p>
// 					<button onClick={e => this.showResult(e)}>获取数据</button>
// 					<button onClick={e => this.changeResult(e)}>修改数据</button>
// 				</p>
// 			</div>
// 		)
// 	}
// }

// 非约束性组件
class Demo extends Component {
	// 事件回调函数
	showResult() {
		// 获取元素
		let select = this.refs.color;
		// 获取选项并定义结果
		let options = select.options;
		let result = []
		// 遍历选项
		for (let i = 0; i < options.length; i++) {
			// 找出选中的选项
			if (options[i].selected) {
				// 将内容存储在result中
				result.push(options[i].value)
			}
		}
		// 找出结果
		console.log(result)
	}
	changeResult() {
		// 选中前两个
		let choose = ['isRed', 'isGreen'];
		// 获取options
		let options = this.refs.color.options;
		// 遍历options，找出value在choose数组中的选项，将其selected设置为true，不在choose数组中的选项，将selected设置为false
		// ickt: for (let i = 0; i < options.length; i++) {
		// 	// 每个选项就是options[i]
		// 	let item = options[i];
		// 	// item.selected = false;
		// 	// 遍历choose数组
		// 	for (let j = 0; j < choose.length; j++) {
		// 		// 每个成员是choose[j],判断是否与item.value相等
		// 		if (choose[j] === item.value) {
		// 			// 将selected设置为true
		// 			item.selected = true;
		// 			// 我们要查看先一个选项option，而不是choose下一个成员
		// 			continue ickt;
		// 			// break;
		// 		}
		// 	}
		// 	// 不在choose数组中，selected要设置成false
		// 	item.selected = false;
		// }
		// es5
		// for (let i = 0; i < options.length; i++) {
		// 	// 查看是否在choose数组中
		// 	if (choose.indexOf(options[i].value) >= 0) {
		// 		// 在choose数组中，设置为选中态
		// 		options[i].selected = true;
		// 	} else {
		// 		// 不在choose数组中，设置为非选中态
		// 		options[i].selected = false;
		// 	}
		// }
		// es6
		// 将类数组对象，转化成数组对象并遍历
		Array.from(options)
			// 遍历数组
			.forEach(item => {
				// 查看是否在choose数组中
				if (choose.indexOf(item.value) >= 0) {
					return item.selected = true;
				}
				item.selected = false;
			})
	}
	render() {
		// 虚拟DOM
		return (
			<div>
				<p>
					<select multiple defaultValue={['isRed', 'isBlue']} ref="color">
						<option value="isRed">red</option>
						<option value="isGreen">green</option>
						<option value="isBlue">blue</option>
					</select>
				</p>
				<p>
					<button onClick={e => this.showResult(e)}>获取数据</button>
					<button onClick={e => this.changeResult(e)}>修改数据</button>
				</p>
			</div>
		)
	}
}



// 渲染组件
render(<Demo></Demo>, app)