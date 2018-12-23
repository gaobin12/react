// 引入redux
// 解构的同时可以定义别名
// import { createStore as c } from 'redux';
// console.log(111, c)
import { createStore } from 'redux';

// 定义消息类型常量
const ADD = 'ADD';
const COUNT = 'COUNT';

// 首先定义action对象
let addNum = { type: ADD, num: 5 };
let countNum = { type: COUNT, num: 2 };

// 定义reducer就是定义函数
function reducer(state = 0, action) {
	// 根据action修改state
	// console.log(state, action);
	// 判断action的类型
	switch (action.type) {
		case ADD:
			state += +action.num;
			break;
			// 由于state是基本类型，因此可以直接返回，是对象不行
			// return state += action.num;
			// return state
		case COUNT:
			state -= action.num;
			break;
	}
	// 返回值就是新的state
	return state;
}

// 定义store,参数就是reducer函数
let store = createStore(reducer);

console.log(111, store, store.getState())

// 监听store的变化, 打印state对象
store.subscribe(res => console.log(123, store.getState()))

// 发布action
// store.dispatch()
let { dispatch } = store;
dispatch(addNum)
dispatch(addNum)
dispatch(countNum)
