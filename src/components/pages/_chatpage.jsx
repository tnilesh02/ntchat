import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// Layout
import Header from '../Layout/header.jsx'

// chats
import { chats } from '../chats/chats.jsx';

// ui 
import TextBox from '../UI/chats.jsx';

export default class ChatPage extends Component {

	render() {
		const Chats = chats.map(item => <TextBox item={item} />);
		return (
			<div className="chat-page">
				<Header />
				<div className="chat__with">
					<Link to="/chat-list" className="chat__with-arrow">&larr;</Link>
					<div className="chat__with-name">Nilesh</div>
				</div>
				<div className="chat">
					<div id="chattexts" className="chat__texts">
						{Chats}
					</div>
					<div className="chat__form">
						<input type="text" className="chat__input" placeholder="Type here..."/>
						<button className="chat__send">Send</button>
					</div>
				</div>
			</div>
			)
	}

	componentDidMount() {
		var element = document.getElementById('chattexts');
		element.scrollTop = element.scrollHeight;
	}

}