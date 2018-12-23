// 引入react库
import React from 'react';
// 引入渲染库
import { render } from 'react-dom';
// 引入应用程序
import App from './app/app';

// 按照规范，获取元素
render(<App page="start"></App>, document.getElementById('app'))
// render(<App></App>, document.getElementById('app'))