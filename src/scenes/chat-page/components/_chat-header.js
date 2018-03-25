// libs
import React from 'react'

// images
import profile from '../images/profile.png'

const ChatHeader = () => {
  return (
    <div className="ca-chat__header">
      <div>
        <img
          className="ca-chat__profile-icon"
          alt="icon"
          src={profile} />
        <div className="ca-chat__name">
          Bhavya
        </div>
        <div className="ca-chat__back-icon">
          &lt;
        </div>
      </div>
    </div>
  )
}

export default ChatHeader
