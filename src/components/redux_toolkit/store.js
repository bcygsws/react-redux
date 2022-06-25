/**
 *
 * @ redux toolkit实现组件通信
 * 创建一个空的store(按需导入configureStore)
 *
 * 将同步和异步都写在ListSlice中，才不会报initState相关的错误
 *
 */
import { configureStore } from '@reduxjs/toolkit';
import listReducer from './ListSlice.js';
// 有多个reducer，需要先合并
// const allReducers = combineReducers({
// 	// 切片createSlice的name标识符
// 	matic: ListSlice.reducer,
// 	mov: MovieSlice.reducer
// });
const store = configureStore({
	reducer: {
		// 切片createSlice的name标识符
		matic: listReducer
		// mov: movieReducer
	},
	// 1.开启redux的调试工具 redux devTools
	// 2.在react-redux实现通信时，引进包@redux-devtools/extension中的composeWithDevTools包裹applyMiddleware才可以进行google
	// 浏览器的实时调试
	devTools: true
});
export default store;
