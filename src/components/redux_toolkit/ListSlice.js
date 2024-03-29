/**
 *
 * @ 方式一：在slice文件中请求后端数据
 * slice切片
 * 1. slice 需要一个name标识符 + 初始化state值 + reducer来控制state如何变化
 * 2. 一旦slice创建完成，就可以导出Redux action creators 和reducer方法
 *
 * Redux需要我们通过制作和更新数据副本，来不可变的更新state--->Salary的方式
 * Redux Toolkit的createSlice和createReducer内部API 使用了Immer库，这允许我们可以直接写更改逻辑，
 * 不必制作副本，它将正确的成为不可变更新
 * 参考文档：https://blog.csdn.net/youhebuke225/article/details/124940710?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-0-124940710-blog-119720636.pc_relevant_paycolumn_v3&spm=1001.2101.3001.4242.1&utm_relevant_index=3
 * 参考文档2：https://blog.csdn.net/qq_23539691/article/details/119720636?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-4-119720636-blog-113787326.pc_relevant_downloadblacklistv1&spm=1001.2101.3001.4242.3&utm_relevant_index=7
 * 参考文档3：https://zhuanlan.zhihu.com/p/382487951
 * 参考文档4：https://www.5axxw.com/questions/content/39bcn8
 *
 *
 */
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// 引入axios
const initialState = {
	val: 0,
	msg: '',
	list: [
		{
			id: 1,
			name: '乔峰',
			content: '胡汉恩仇，英雄末路'
		}
	],
	ls: [],
	// 表示加载状态，请求完成前true;请求结束后，正常接收到数据或没有接收到数据，loading均为false
	loading: true,
	// 请求完成后，报错
	err: null
};
export const getMovieData = createAsyncThunk('mov/getMovieData', async () => {
	const res = await axios.get(
		'https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=24&page_id=1&ret_num=48'
	);
	if (res.status !== 200) {
		console.log(new Error('请求数据失败~'));
	}
	// 特别注意：解构的data是postman工具请求的返回值，直接当做extraReducers中的action
	// axios请求回来的数据res，数据格式：
	/* 
	{
			config:{},
			data:[],  // 将postman接口调试工具请求的返回值，放到了data键下，所有需要解构：const {data}=res;才算是拿到了返回对象
			status:200

	}
	*/
	const { data } = res;
	return data;
});
const ListSlice = createSlice({
	// 切片名称
	name: 'matic',
	// 初始值
	initialState,
	// 自动生成切片reducer
	/**
	 *
	 * reducer有两个参数
	 * state,action
	 * 1.action是一个对象，有type和payload两个键，将payload解构出来
	 * 2.action={type:'increment',payload:{}},type不需要时，直接解构出参数payload，{payload}
	 * 数据接口请求的数据：createAsyncThunk 中return返回的data,以及extraReducers中的payload
	 * {
   * "code": "A00000",
   * "data": {
   *    "card_type": "catelib_video",
   *    "pingback": {
   *        "bkt": "lt02,rr04,rc01,rr22,rr13,mr02,greeting_rank3_b,greeting_recall2_d,greeting_recall3_c,greeting_rank1_b,greeting_rank2_a,greeting_rank4_a,list_online",
   *        "e": "087d982cfd21d0ba0986d6556d4116d5"
   *    },
   *    "session": "087d982cfd21d0ba0986d6556d4116d5",
   *    "has_next": 1,
   *    "list": []
	 * 	}
	 * }
	 * 
	 *
	 */
	reducers: {
		increment: (state, { payload }) => {
			// Redux Toolkit允许使用我们在reducers中直接改写state的逻辑
			// 由于实现了Immer库，并没有真正改变state
			// 而是监测到"草稿state"的更给，并根据这些更改生成一个全新的不可变state
			state.val += payload.step;
		},
		decrement: (state) => {
			state.val -= 1;
		},
		addItem: (state, { payload }) => {
			state.msg = payload.val;
		},
		// 添加评论
		addComments: (state, { payload }) => {
			state.list = [payload, ...state.list];
			// 表示刚添加了一条数据，之后清空文本域
			state.msg = '';
		}
		// loadDataEnd(state, { payload }) {
		// 	const { data } = payload;
		// 	state.loading = false;
		// 	state.ls = data.list;
		// }
	},
	extraReducers: {
		// payload来自于异步createAsyncThunk中定义的异步action的返回值
		/**
		 * 两种写法：
		 * 1.extraReducers中处理其他处或异步定义的actions时，键名两种写法：
		 * a.[getMovieData.fulfilled.type]  和reducers中保持一致，直接拿type名称
		 * b.或者直接简写为：
		 * [getMovieData.fulfilled]
		 *
		 *
		 */

		// [getMovieData.fulfilled.type]: (state, { payload }) => {
		// 	const { data } = payload;
		// 	// 获取数据成功
		// 	console.log('fulfilled~', payload);
		// 	state.loading = false;
		// 	state.ls = data.list;
		// },
		// [getMovieData.pending.type]: (state) => {
		// 	// 获取数据进行中
		// 	console.log('进行中~');
		// 	state.loading = true;
		// },
		// [getMovieData.rejected.type]: (state, err) => {
		// 	// 获取数据失败
		// 	console.log('rejected~', err);
		// 	state.loading = false;
		// 	state.err = '请求错误';
		// }
		[getMovieData.fulfilled]: (state, { payload }) => {
			const { data } = payload;
			// 获取数据成功
			console.log('fulfilled~', payload);
			state.loading = false;
			state.ls = data.list;
		},
		[getMovieData.pending]: (state) => {
			// 获取数据进行中
			console.log('进行中~');
			state.loading = true;
		},
		[getMovieData.rejected]: (state, err) => {
			// 获取数据失败
			console.log('rejected~', err);
			state.loading = false;
			state.err = '请求错误';
		}
	}
});

// redux方法每一个case生成一个Action
// export const { increment, decrement, addItem, addComments, loadDataEnd } =ListSlice.actions;
export const { increment, decrement, addItem, addComments } = ListSlice.actions;
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
