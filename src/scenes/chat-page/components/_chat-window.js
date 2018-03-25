// libs
import React, { Component } from 'react'
import io from 'socket.io-client'

// components
import config from '../../../config/index'
import ChatHeader from './_chat-header'
import ChatFooter from './_chat-footer'
import ChatMessages from './_chat-messages'

class ChatWindow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: []
    }
    // Connect to the server
    this.socket = io(config.api).connect()

    // Listen for messages from the server
    this.socket.on('server:message', message => {
      this.addMessage(message)
    })
  }

  // send message to server is server is up and running
  sendMessage = (message) => {
    const messageObj = {
      username: this.props.username,
      message
    }
    // Emit the message to the server
    this.socket.emit('client:message', messageObj)

    messageObj.fromMe = true;
    this.addMessage(messageObj);
  }

  addMessage(message) {
    // add the message to the state
    const { messages } = this.state
    messages.push(message)
    this.setState({ messages })
  }

  render () {
    const { messages } = this.state
    const { username } = this.props
    const displayName = (username === 'Bhavya') ? 'Your' : `Bhavya's`
    return (
      <div className="ca-chat__window">
        <div className="ca-chat__window-header">
          {displayName} chat window:
        </div>
        <div className="ca-chat__screen">
          <ChatHeader {...this.props}/>
          <ChatMessages messages={messages}/>
          <ChatFooter onSend={this.sendMessage}/>
        </div>
    </div>
    )
  }
}

export default ChatWindow
