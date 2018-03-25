// libs
import React, { Component } from 'react'

// components
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import ChatWindow from './components/_chat-window'
// styles
import './_style.css'

class ChatPage extends Component {
  render() {
    return (
      <div className="ca-chat">
        <Header />
        <div className="ca-chat__row">
          <ChatWindow />
          <div className="ca-chat__separator" />
          <ChatWindow />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default ChatPage
