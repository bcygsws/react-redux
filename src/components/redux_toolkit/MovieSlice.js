/**
 *
 * @ 请求电影列表的api:https://api.wmdb.tv/api/v1/top?type=Imdb&skip=0&limit=50&lang=Cn
 *
 * api参数：
 * type为必填，可选Douban或Imdb，skip和limit为分页使用，lang调用指定语言的数据，支持Cn或者En
 *
 * thunk函数允许执行异步逻辑，通常用于发起异步请求
 * createAsyncThunk用于创建异步的action,触发时会有三种状态：
 * pending 进行中
 * fulfilled 成功
 * rejected 失败
 *
 * 案例接口：https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=24&page_id=1&ret_num=48
 * 文档：https://www.6hu.cc/archives/36402.html
 *
 * extraReducers让slice处理在别处定义的actions,包括使用createAsyncThunk或者其他slice定义的actions
 *
 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initState = {
	ls: [],
	total: 0
};
export const getMovieData = createAsyncThunk('movie/getList', async () => {
	const res = await axios.get(
		'https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=24&page_id=1&ret_num=48'
	);
	return res;
});
const MovieSlice = createSlice({
	name: 'movie',
	initState,
	reducers: {
		// 数据请求完成触发
		loadDataAtEnd: (state, { payload }) => {
			state.ls = payload;
			state.total = payload.length;
		}
	},
	extraReducers(builder) {
		builder
			.addCase(getMovieData.pending, (state) => {
				// 获取数据进行中
				console.log('进行中~');
			})
			.addCase(getMovieData.fulfilled, (state, { payload }) => {
				// 获取数据成功
				console.log('fulfilled~', payload);
				state.ls = payload.data.list;
				state.total = payload.data.list.length;
			})
			.addCase(getMovieData.rejected, (state, err) => {
				// 获取数据失败
				console.log('rejected~', err);
			});
	}
});
export const { loadDataAtEnd } = MovieSlice.actions;
export default MovieSlice.reducer;
