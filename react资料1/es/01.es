import React, { createElement } from 'react';
// 引入渲染库
import ReactDOM, { render } from 'react-dom';
// 创建虚拟DOM，并且渲染到#app元素内

// console.log(React)
// console.log(ReactDOM, render)

// 创建虚拟DOM
var h1 = createElement('h1', { title: '专业前端培训学校' }, '爱创课堂')
// console.log(h1)

// 渲染虚拟DOM
render(h1, document.getElementById('app'), () => {
	console.log('success')
})