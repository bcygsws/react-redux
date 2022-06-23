/**
 *
 * @ redux toolkit实现组件通信
 * 创建一个空的store(按需导入configureStore)
 *
 *
 */
import { configureStore } from '@reduxjs/toolkit';
import listReducer from './ListSlice.js';
// 有多个reducer，需要先合并
// const allReducers=combineReducers({
// 	// 切片createSlice的name标识符
// 	matic: listReducer,
// 	myInput: inputReducer
// })
const store = configureStore({
	reducer: {
		// 合并多个slice
		matic: listReducer
	}
});
export default store;
