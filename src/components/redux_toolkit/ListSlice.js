/**
 *
 * @ slice切片
 * 1. slice 需要一个name标识符 + 初始化state值 + reducer来控制state如何变化
 * 2. 一旦slice创建完成，就可以导出Redux action creators 和reducer方法
 *
 * Redux需要我们通过制作和更新数据副本，来不可变的更新state--->Salary的方式
 * Redux Toolkit的createSlice和createReducer内部API 使用了Immer库，这允许我们可以直接写更改逻辑，
 * 不必制作副本，它将正确的成为不可变更新
 * 参考文档：https://blog.csdn.net/youhebuke225/article/details/124940710?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-0-124940710-blog-119720636.pc_relevant_paycolumn_v3&spm=1001.2101.3001.4242.1&utm_relevant_index=3
 * 参考文档2：https://blog.csdn.net/qq_23539691/article/details/119720636?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-4-119720636-blog-113787326.pc_relevant_downloadblacklistv1&spm=1001.2101.3001.4242.3&utm_relevant_index=7
 *
 *
 *
 */
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	value: 0
};
const ListSlice = createSlice({
	// 切片名称
	name: 'matic',
	// 初始值
	initialState,
	// 自动生成切片reducer
	reducers: {
		increment: (state, { payload }) => {
			// Redux Toolkit允许使用我们在reducers中直接改写state的逻辑
			// 由于实现了Immer库，并没有真正改变state
			// 而是监测到"草稿state"的更给，并根据这些更改生成一个全新的不可变state
			state.value += payload.step;
		},
		decrement: (state) => {
			state.value -= 1;
		}
	}
});
// redux方法每一个case生成一个Action
export const { increment, decrement } = ListSlice.actions;
// export const asyncIncrement = (payload) => (dispatch) => {
// 	setTimeout(() => {
// 		dispatch(increment(payload));
// 	}, 2000);
// };
// (payload)=>(dispatch)=>{}是简写，还原，后面一个箭头是闭包，return (dispatch)=>{}
// 等价于下面写法
export const asyncIncrement = (payload) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(increment(payload));
		}, 2000);
	};
};
export default ListSlice.reducer;
