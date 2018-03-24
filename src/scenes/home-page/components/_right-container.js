// libs
import React from 'react'

// components
import Button from '../../../components/button/index'

const RightContainer = () => {
  return (
    <div className="ca-home__right-container">
      <div className="ca-home__welcome-text">
        Welcome to Bhavya's personal chat page!
      </div>
      <div className="ca-home__name-container">
        <div className="ca-home__name-heading">
          Please enter your name here!
        </div>
        <div className="ca-home__name-field">
          <label>Name: </label>
          <input type="text" placeholder="your name here..." name="name" />
        </div>
        <div className="ca-home__button-container">
          <Button className="ca-button--primary">
            Start Chat!
          </Button>
        </div>
      </div>
    </div>
  )
}

export default RightContainer
