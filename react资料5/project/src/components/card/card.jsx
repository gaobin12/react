import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './card.less';

// 定义组件
export default class Card extends Component {
	render() {
		let data = this.props.data;
		return (
			<div className="ickt-card">
				<Link to={data.link}>
					<img src={data.img} alt=""/>
					<div className="content">
						<h2>{data.title}</h2>
						<p>
							<span>{data.content}</span>
							<span className="card-comments">{'评论:' + data.comment}</span>
						</p>
					</div>
				</Link>
			</div>
		)
	}
}