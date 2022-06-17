// 导入创建store仓库和中间件对象
import { createStore, applyMiddleware, combineReducers } from 'redux';
import salaryReducer from './salaryReducer.js';
// 导入redux调试扩展插件
import { composeWithDevTools } from '@redux-devtools/extension';
// 支持异步action的插件redux-thunk
import thunk from 'redux-thunk';
/**
 *
 * combineReducer({
 *   state属性名：对应的纯函数
 *
 * })
 *
 */
const allReducers = combineReducers({
	money: salaryReducer
});
// 导出状态仓库store，const store=createStore(……)
export default createStore(
	allReducers,
	composeWithDevTools(applyMiddleware(thunk))
);
