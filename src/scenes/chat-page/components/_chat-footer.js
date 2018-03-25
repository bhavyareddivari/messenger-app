// libs
import React from 'react'

// components
import Button from '../../../components/button/index'

const ChatFooter = () => {
  return (
    <div className="ca-chat__footer">
      <div className="ca-chat__plus">+</div>
      <div className="ca-chat__message-field">
        <input type="text" placeholder="Message" name="message" />
      </div>
      <div className="ca-chat__send">
        <Button className="ca-button--primary">
          Send
        </Button>
      </div>
    </div>
  )
}

export default ChatFooter
