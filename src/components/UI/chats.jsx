import React, { Component } from 'react';

export default class TextBox extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const item = this.props.item;
		const randomNumber = Math.floor(Math.random() * 2);
		const type = randomNumber === 0 ? "textbox sender" : "textbox response";
		return (
			<div className="textbox__parent">
				<div className={type}>
					<div className="textbox__content">
						{item.src ? <img src={item.src} alt="image"/> : item.text}
					</div>
					<div className="textbox__time">
						{item.time}
					</div>
				</div>
			</div>
			)
	}
}