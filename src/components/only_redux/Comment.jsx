/**
 *
 * @Redux单独实现组件通信
 * 特别注意：store.subscribe(callback)
 * 1.store.subscribe()在初次渲染完成的生命钩子中，初始执行后，就开始一直监听store中state的变化
 * 2.callback是state变化前后要执行的操作，这里是this.setState()更新state中val值，来更新页面
 *
 * 参考文档：https://blog.csdn.net/qq_44722915/article/details/109642054
 *
 *
 */
import React from 'react';
import store from './store.js';
import { ADDITEM } from './constant.js';
// 导入列表相关的样式
import ListStyle from '../../css/textarea.less';
// 在生命周期钩子中书写store.subscribe(callback)
export default class Comment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			...store.getState(),
			// 文本框的值
			inputTxt: ''
		};
	}
	render() {
		return (
			<div className={ListStyle.c_container}>
				<hr/>
				<p>计数器组件的当前val值：{this.state.count.val}</p>
				<h4>添加列表</h4>
				用户名：
				<input
					type="text"
					onChange={this.handleChange}
					placeholder="请输入用户名"
					value={this.state.inputTxt}
				/>
				<br />
				<textarea
					ref={(ele) => (this.myRef = ele)}
					placeholder="请输入描述内容"
				></textarea>
				<button onClick={this.addItem}>添加评论</button>
				<ul>
					{this.state.list.map((item) => {
						return (
							<li key={item.id}>
								{item.id}---{item.content}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
	handleChange = (e) => {
		// e.persist()防止react系统内部更改value的值，导致e.target.value拿不到值
		e.persist();
		// this.setState实时更新input输入文本框
		this.setState({
			inputTxt: e.target.value
		});
	};
	addItem = () => {
		// 组织成一个对象，分发给commentReducer
		const action = {
			type: ADDITEM,
			data: {
				id: parseInt(Date.now()),
				name: this.state.inputTxt,
				content: this.myRef.value
			}
		};
		store.dispatch(action);
		// 清空文本框和文本域
		this.myRef.value = this.state.inputTxt = '';
	};
	// 生命周期钩子
	// 仓库进行订阅更新
	// 当store中state更新时，store.subscribe(callback)就会调用，传入的回调函数执行，就进行数据改变前后的操作
	componentDidMount() {
		// 这个组件只要生命周期没结束，在初次渲染完成后，store.subscribe(callback)将时时刻刻监听store中state的变化
		store.subscribe(() => {
			// this.setState用以更新页面
			this.setState(store.getState());
		});
	}
}
