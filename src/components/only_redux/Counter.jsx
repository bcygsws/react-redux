/**
 *
 * @Redux单独实现组件通信
 *
 *
 *
 */
import React from 'react';
import store from './store.js';
import { INC, DEC } from './constant.js';
export default class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = store.getState();
		// 绑定this对象
		this.handleChange = this.handleChange.bind(this);
		// 当store中状态值变化时，调用相应的方法handleChange更改this.state的值（this.setState）来更新页面
		store.subscribe(this.handleChange);
	}
	render() {
		return (
			<div>
				<h3>Redux单独实现通信</h3>
				<button onClick={this.increment}>count值+2</button>
				<button onClick={this.decrement}>count值-2</button>
				<p>当前value值：{this.state.val}</p>
			</div>
		);
	}
	increment = () => {
		store.dispatch({ type: INC, step: 2 });
	};
	decrement = () => {
		store.dispatch({ type: DEC, step: 2 });
	};
	// 生命周期钩子
	// 仓库进行订阅更新
	handleChange() {
		this.setState(store.getState());
	}
}
