// libs
import React from 'react'

const Message = ({fromMe, message, time}) => {
  // give css based on who sent the message
  const getClassName = fromMe ? 'ca-chat__from-me' : 'ca-chat__from-other'
  return (
    <div className={getClassName}>
      <div className='ca-chat__message-text'>
        {message}
        <div className="ca-chat__message-time">
          {time}
        </div>
      </div>
    </div>
  )
}

export default Message
