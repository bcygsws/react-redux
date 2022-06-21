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
import { INC, DEC } from './constant.js';
// 第一种写法：在构造函数书写store.subscribe(calllback)函数
// export default class Counter extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = store.getState();
// 		// 绑定this对象
// 		this.handleChange = this.handleChange.bind(this);
// 		// 当store中状态值变化时，调用相应的方法handleChange更改this.state的值（this.setState）来更新页面
// 		store.subscribe(this.handleChange);
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<h3>Redux单独实现通信</h3>
// 				<button onClick={this.increment}>count值+2</button>
// 				<button onClick={this.decrement}>count值-2</button>
// 				<p>当前value值：{this.state.val}</p>
// 			</div>
// 		);
// 	}
// 	increment = () => {
// 		store.dispatch({ type: INC, step: 2 });
// 	};
// 	decrement = () => {
// 		store.dispatch({ type: DEC, step: 2 });
// 	};
// 	// 仓库进行订阅更新
// 	handleChange() {
// 		this.setState(store.getState());
// 	}
// }
// 第二种写法：在生命周期钩子中书写store.subscribe(callback)
export default class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = store.getState();
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
	// 当store中state更新时，store.subscribe(callback)就会调用，传入的回调函数执行，就进行数据改变前后的操作
	componentDidMount() {
		// 这个组件只要生命周期没结束，在初次渲染完成后，store.subscribe(callback)将时时刻刻监听store中state的变化
		store.subscribe(() => {
			// this.setState用以更新页面
			this.setState(store.getState());
		});
	}
}
