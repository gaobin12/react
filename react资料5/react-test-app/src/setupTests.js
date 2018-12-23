// 引入模块
import { configure } from 'enzyme';
// 引入适配器
import Adapter from 'enzyme-adapter-react-16';
// 配置
configure({ adapter: new Adapter() })