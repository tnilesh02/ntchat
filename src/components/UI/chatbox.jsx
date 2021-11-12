import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ChatBox extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const item = this.props.item;
		return (
			<Link style={{textDecoration: "none", color: "inherit"}} to="/chat-page">
			<div className="chatbox">
				<div className="chatbox__top">
					<div className="chatbox__with">
						{item.with}
					</div>
					<div className="chatbox__time">
						{item.time}
					</div>
				</div>
				<div className="chatbox__bottom">
					<div className="chatbox__last-text">
						{item.lasttext}
					</div>
				</div>
			</div>
			</Link>
			
			)
	}
} 