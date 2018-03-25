// libs
import React from 'react'

// components
import ChatHeader from '../components/_chat-header'
import ChatFooter from '../components/_chat-footer'

const ChatWindow = () => {
  return (
    <div className="ca-chat__window">
      <ChatHeader />
      <div className="ca-chat__content">
        
      </div>
      <ChatFooter />
    </div>
  )
}

export default ChatWindow
