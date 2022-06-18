/**
 *
 * @ slice切片
 * 1. slice 需要一个name标识符 + 初始化state值 + reducer来控制state如何变化
 * 2. 一旦slice创建完成，就可以导出Redux action creators 和reducer方法
 * 
 * Redux需要我们通过制作和更新数据副本，来不可变的更新state--->Salary的方式
 * Redux Toolkit的createSlice和createReducer内部API 使用了Immer库，这允许我们可以直接写更改逻辑，
 * 不必制作副本，它将正确的成为不可变更新
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
		increment: (state) => {
			// Redux Toolkit允许使用我们在reducers中直接改写state的逻辑
			// 由于实现了Immer库，并没有真正改变state
			// 而是监测到"草稿state"的更给，并根据这些更改生成一个全新的不可变state
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		}
	}
});
// redux方法每一个case生成一个Action
export const { increment, decrement } = ListSlice.actions;
export default ListSlice.reducer;
