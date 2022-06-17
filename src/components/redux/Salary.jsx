/**
 *
 * 涨、扣工资案例，理解redux + react-redux + redux-thunk +  @redux-devtools/extension的使用流程
 * 
 * 并体会使用chrome浏览器的redux调试
 *
 *
 */
import React from 'react';
// react-redux
// connect将mapStateToProps和mapDispatchToProps两个方法连接起来
import { connect } from 'react-redux';
// 导入actions对象
import { incAction, decAction } from './salaryActions.js';
class Salary extends React.Component {
	render() {
		return (
			<div>
				<h4>这是涨扣工资操作组件</h4>
				<select ref={(ele) => (this.myRef = ele)}>
					<option value="100">100</option>
					<option value="200">200</option>
					<option value="300">300</option>
				</select>
				<button onClick={this.addSalary}>涨工资</button>
				<button onClick={this.decSalary}>扣工资</button>
				<p>实发工资：{this.props.money}元</p>
			</div>
		);
	}
	// 点击按钮的事件处理函数
	// 涨工资点击事件
	addSalary = () => {
		const { value } = this.myRef;
		this.props.add(value * 1);
	};
	// 扣工资点击事件
	decSalary = () => {
		const { value } = this.myRef;
		this.props.dec(value * 1);
	};
}

const mapStateToProps = (state) => {
	return { money: state.money };
};
export default connect(mapStateToProps, {
	add: incAction,
	dec: decAction
})(Salary);
