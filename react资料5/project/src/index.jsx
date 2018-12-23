import { render } from 'react-dom';
// 引入路由并渲染
import routes from './router/router';

// 渲染路由策略
// 项目中，按照w3规范，获取元素
render(routes, document.getElementById('root'))
