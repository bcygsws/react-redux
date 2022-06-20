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
		store.subscribe(this.handleChange);
	}
	render() {
		return (
			<div>
				<h3>Redux单独实现通信</h3>
				<button onClick={this.increment}>count值+1</button>
				<button onClick={this.decrement}>count值-1</button>
				<p>当前value值：{this.state.val}</p>
			</div>
		);
	}
	increment = () => {
		store.dispatch({ type: INC, step: 1 });
	};
	decrement = () => {
		store.dispatch({ type: DEC, step: 1 });
	};
	// 生命周期钩子
	// 仓库进行订阅更新
	handleChange() {
		this.setState(store.getStore());
	}
}
