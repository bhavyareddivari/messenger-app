// libs
import React from 'react'

// images
import twitter from '../images/twitter.png'
import fb from '../images/fb.png'
import linkedin from '../images/linkedin.png'
import mail from '../images/mail.svg'
import profile from '../images/profile.png'

const LeftContainer = () => {
  return (
    <div className="ca-home__left-container">
      <div className="ca-home__photo-container">
        <img className="ca-home__profile-icon" alt="icon" align="middle" src={profile} />
      </div>
      <div className="ca-home__info-container">
        Bhavya Reddivari
        <div>
          <img className="ca-home__icon--20px" alt="icon" align="middle" src={twitter} />
          <img className="ca-home__icon--15px" alt="icon" align="middle" src={fb} />
          <img className="ca-home__icon--30px" alt="icon" align="middle" src={linkedin} />
          <img className="ca-home__icon--50px" alt="icon" align="middle" src={mail} />
        </div>
      </div>
    </div>
  )
}

export default LeftContainer
