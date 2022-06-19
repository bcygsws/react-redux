import React from 'react';
// 导入在切片createSlice中声明的actions
import { increment, decrement, asyncIncrement } from './ListSlice.js';
// 特别注意：导入的useSelector和useDispatch,它只适用于函数式组件
import { useDispatch, useSelector } from 'react-redux';
export default function List() {
	const dispatch = useDispatch();
	// 1.useSelector钩子，读取变化的state值，并重新渲染页面
	// 2.list是store.js文件中reducer值对象的键
	// configureStore({
	// 	reducer: {
	// 		list: listReducer
	// 	}
	// });
	const count = useSelector((state) => state.matic.value);
	return (
		<div>
			<h4>这是List列表子组件</h4>
			{/* 列表 */}
			<button onClick={() => dispatch(increment({ step: 1 }))}>
				value值+1
			</button>
			<button onClick={() => dispatch(decrement())}>
				value值-1
			</button>
			<button onClick={()=>dispatch(asyncIncrement({ step: 1 }))}>
				value值异步+1
			</button>
			{/* 渲染count值 */}
			<p>{count}</p>
		</div>
	);
}
