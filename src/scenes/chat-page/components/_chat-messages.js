// libs
import React, { Component } from 'react'

// components
import Message from './_message'

// utility
import uniqueId from 'lodash/uniqueId'

class ChatMessages extends Component {

  componentDidUpdate () {
    // If new message comes, scroll to the bottom of list
    const MessageContainer = document.getElementById('messageList');
    MessageContainer.scrollTop = MessageContainer.scrollHeight;
  }

  render() {
    const { messages } = this.props
    // Loop through all the messages coming from props
    // and create a Message component
    const messageList = messages.map((message) => {
      return (
        <Message
          key={uniqueId('message')}
          username={message.username}
          message={message.message}
          fromMe={message.fromMe}
          time={message.time}/>
      )
    })
    return (
      <div className="ca-chat__content" id="messageList">
        {messageList}
      </div>
    )
  }
}

export default ChatMessages
