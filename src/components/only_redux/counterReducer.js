/**
 *
 *
 *
 */
import { INC, DEC } from './constant.js';
const preState={
  val:0
}
const counterReducer = (state = preState, action) => {
	const { type, step } = action;
	switch (type) {
		case INC:
			return state.val + step;
		case DEC:
			return state.val - step;
		default:
			return state.val;
	}
};
export default counterReducer;
