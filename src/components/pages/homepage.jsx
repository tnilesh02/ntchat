import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// Layout
import Header from '../Layout/header.jsx';

export default class Homepage extends Component {

	constructor(props) {
		super(props);

		this.state = {
			
		}
	}

	render() {

		return (
			<div className="wrapper">
				<Header />
				<div className="asknumber">
					<div className="asknumber__box">
						<div className="asknumber__text">
							Enter your phone number
						</div>
						<div className="asknumber__input-box">
							<input className="asknumber__input" type="number" />
						</div>
						<div className="asknumber__button-box">
							<button className="asknumber__button"><Link style={{textDecoration: "none", color: "white"}} to="/otp">Proceed</Link></button>
						</div>
					</div>
				</div>
			</div>
			)
	}
}