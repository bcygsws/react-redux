/**
 *
 * @ Redux
 * 1.redux独立的状态管理的js库它不是React的插件
 * 2.可以在vue react angular项目中使用，一般配合react使用
 * 3.作用：集中式管理react应用多个组件之间的状态共享
 *
 * 参考文档：https://blog.csdn.net/imaginecode/article/details/82814088
 *
 * 使用场景：
 * a.某个组件的状态需要共享
 * b.组件的某个状态需要在任何地方都能拿到
 * c.一个组件改变全局的状态
 * d.一个组件改变另一个组件的状态
 *
 * 配合react使用的专门插件库
 * react-redux插件
 * 它可以简化react中redux插件的使用
 *
 * React中使用redux需要的相关插件
 * redux  常用对象：createStore() applyMiddleware() combineReducers()
 * react-redux 常用对象：Provider connect
 * redux-thunk 支持异步的action行为 applyMiddleware(thunk[,promise,log])
 *
 * Redux调试工具：
 * a.chrome安装redux-devtools
 * b.项目中安装包：redux-devtools-extension,该插件已经被丢弃；使用@redux-devtools/extension代替它
 * 安装：npm install --save-dev @redux-devtools/extension
 * c.编码
 * import {composeWithDevTools} from 'redux-devtools-extension'
 *
 * const store = createStore(
 * counter,
 * composeWithDevTools(applyMiddleware(thunk))
 * );
 *
 * @ redux toolkit 实现组件通信
 * 参考文档：https://blog.csdn.net/wangyangnuli/article/details/122520675
 * 参考文档2：https://blog.csdn.net/ZTAHNG/article/details/123180704
 * 参考文档3：https://blog.csdn.net/niuiic/article/details/123139631?spm=1001.2101.3001.6650.4&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-4-123139631-blog-122218621.pc_relevant_downloadblacklistv1&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-4-123139631-blog-122218621.pc_relevant_downloadblacklistv1&utm_relevant_index=9
 * 参考文档4：http://cn.redux.js.org/redux-toolkit/overview/
 *
 */
// 案例：下拉框选择一个额度，然后点击扣工资、加工资按钮，下面展示实得工资数额(假设工资，初始值为10000)
import React from 'react';
import List from './List.jsx';
export default class UsingRedux extends React.Component {
	render() {
		return (
			<div>
				<List></List>
			</div>
		);
	}
}
