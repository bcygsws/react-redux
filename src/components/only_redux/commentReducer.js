/**
 *
 * @评论列表的reducer
 *
 *
 */
import { ADDITEM } from './constant.js';
const initialState = [
	{
		id: 1,
		name: '乔峰',
		content: '盖世大侠'
	}
];
const commentReducer = (state = initialState, action) => {
	const { type, data } = action;
	switch (type) {
		case ADDITEM:
			return [data, ...state];
		default:
			return state;
	}
};
export default commentReducer;
