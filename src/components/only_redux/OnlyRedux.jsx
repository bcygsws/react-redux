import React from 'react';
import Counter from './Counter.jsx';
import Comment from './Comment.jsx';
export default class OnlyRedux extends React.Component {
	render() {
		return (
			<div>
				<Counter></Counter>
				<Comment></Comment>
			</div>
		);
	}
}
