// libs
import React, { Component } from 'react'

// components
import ChatWindow from './components/_chat-window'

// styles
import './_style.css'

class ChatPage extends Component {
  render() {
    const myName = "Bhavya"
    return (
      <div className="ca-chat">
        <div className="ca-chat__row">
          <ChatWindow {...this.props}/>
          <div className="ca-chat__separator" />
          <ChatWindow username={myName}/>
        </div>
      </div>
    );
  }
}

export default ChatPage
