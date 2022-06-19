/**
 *
 * @ 创建评论列表组件
 *
 *
 */
function Comment() {
	return (
		<div>
			用户名：
			<input type="text" value="" placeholder="请输入用户名" />
			<textarea ref={(ele) => (this.myRef = ele)}></textarea>
			<button>提交评论</button>
		</div>
	);
}
