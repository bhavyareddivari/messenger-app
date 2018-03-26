// libs
import React from 'react'

const Message = ({fromMe, message, time, isTyping}) => {
  // TODO: show typing... text when other person is typing- some issue:: need to fix

  // give css based on who sent the message
  let  getClassName = fromMe ? 'ca-chat__from-me' : 'ca-chat__from-other'
  return (
    <div>
      {(isTyping)
      ? <div className="ca-chat_message-typing">typing...</div>
      : <div className={getClassName}>
          <div className='ca-chat__message-text'>
            {message}
          </div>
          <div className="ca-chat__message-time">
            {time}
          </div>
        </div>
      }
    </div>
  )
}

export default Message
