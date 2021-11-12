import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';

// Layout
import Header from '../Layout/header.jsx';

export default class Homepage extends Component {

	render() {

		return (
			<div className="wrapper">
				<Header />
				<div className="asknumber">
					<div className="asknumber__box">
						<div className="asknumber__text">
							Enter OTP
						</div>
						<div className="asknumber__otp">
							check your messeges for OTP
						</div>
						<div className="asknumber__input-box">
							<input className="asknumber__input" type="number"/>
						</div>
						<div className="asknumber__button-box">
							<button className="asknumber__button"><Link style={{textDecoration: "none", color: "white"}} to="/chat-list">Submit</Link></button>
						</div>
					</div>
				</div>
			</div>
			)
	}
}