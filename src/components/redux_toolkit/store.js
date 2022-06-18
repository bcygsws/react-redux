/**
 *
 * @ redux toolkit实现组件通信
 * 创建一个空的store(按需导入configureStore)
 * 
 *
 */
import { configureStore } from '@reduxjs/toolkit';
import listReducer from './ListSlice.js';
const store = configureStore({
	reducer: {
		// 切片createSlice的name标识符
		matic: listReducer
	}
});
export default store;
