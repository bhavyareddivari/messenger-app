// libs
import React, { Component } from 'react'

// components
import ChatWindow from './components/_chat-window'

// styles
import './_style.css'

class ChatPage extends Component {
  render() {
    const { username } = this.props
    return (
      <div className="ca-chat">
        <div className="ca-chat__row">
          <ChatWindow />
          <div className="ca-chat__separator" />
          <ChatWindow />
        </div>
      </div>
    );
  }
}

export default ChatPage
