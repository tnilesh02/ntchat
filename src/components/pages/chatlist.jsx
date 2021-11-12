import React, { Component } from 'react';

//layout
import Header from '../Layout/header.jsx';

// Chat Data
import { chatData } from '../chats/chatsData.jsx';

// components
import ChatBox from '../UI/chatbox.jsx';

export default class ChatList extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const chatBoxes = chatData.map(item => <ChatBox item={item}/>)

		return (
			<div className="chatlist-page">
				<Header />
				<div className="chatlist">
					{chatBoxes}
				</div>
			</div>
			)
	}
}