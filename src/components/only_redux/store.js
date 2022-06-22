/**
 *
 * @
 *
 */
import { createStore, combineReducers } from 'redux';
import counterReducer from './counterReducer.js';
import commentReducer from './commentReducer.js';
// 这种写法会有一个问题，将counterReducer和commentReducer直接当做view视图中state的键，在View视图渲染
// const allReducers = combineReducers({
// 	counterReducer,
// 	commentReducer
// });
// 起别名的方式，使得代码可读性更强

const allReducers = combineReducers({
	count: counterReducer,
	list: commentReducer
});

const store = createStore(allReducers);
export default store;
