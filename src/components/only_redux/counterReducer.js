/**
 *
 *
 *
 */
import { INC, DEC } from './constant.js';
const preState = {
	val: 0
};
const counterReducer = (state = preState, action) => {
	const { type, step } = action;
	if (type === INC) {
		state.val += step;
		return state;
	} else if (type === DEC) {
		state.val -= step;
		return state;
	} else {
		return state;
	}
};
export default counterReducer;
