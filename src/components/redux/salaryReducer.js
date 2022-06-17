/**
 *
 * 纯函数
 *
 *
 */
import { INC, DEC } from './constant.js';
// state初始化值，在组件中初始渲染{this.props.money}
const salaryReducer=(state = 10000, action)=> {
	const { type, data } = action;
	switch (type) {
		case INC:
			return state + data;
		case DEC:
			return state - data;
		default:
			return state;
	}
}
export default salaryReducer;
