/**
 *
 * @ 创建评论列表组件
 *
 *
 */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// 导入文本框的slice切片文件
import { addItem, addComments } from './ListSlice.js';
import sty from '../../css/comment.less';
export default function Comment() {
	const { msg, list, val } = useSelector((state) => state.matic);
	const dispatch = useDispatch();
	let nameRef, txtRef;
	const handleChange = (e) => {
		// 为了阻止React内部重置e.target的值，e调用一下persist()方法，React17中没有persist这个方法了
		e.persist();
		console.log(e.target);
		// 实时dispatch文本框数据
		dispatch(addItem({ val: e.target.value }));
	};
	const cmtBtn = () => {
		// 提交按钮
		dispatch(
			addComments({
				id: parseInt(Date.now()),
				name: msg,
				content: txtRef.value
			})
		);
		// 清空文本框和文本域
		txtRef.value = '';
	};
	return (
		<div className={sty.c_container}>
			{/* 上面一个组件的val值 */}
			<hr />
			<div>上面一个组件的val值：{val}</div>
			用户名：
			<input
				type="text"
				ref={(ele) => (nameRef = ele)}
				value={msg}
				placeholder="请输入用户名"
				onChange={handleChange}
			/>
			<br />
			<textarea
				className={sty.area}
				ref={(ele) => (txtRef = ele)}
			></textarea>
			<br />
			<button onClick={cmtBtn}>提交评论</button>
			{/* 渲染列表 */}
			<ul>
				{list.map((item) => {
					return (
						<li key={item.id}>
							{item.name}---{item.content}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
