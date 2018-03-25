// libs
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

// components
import ChatPage from '../../chat-page/index'
import Button from '../../../components/button/index'

class RightContainer extends Component {
  render () {
    const { isSubmitted, username, getUsername, submitUsername } = this.props
    let isDisabled = () => (username.length === 0)

    return (
      <form onSubmit={submitUsername}
      className="ca-home__right-container">
        <div className="ca-home__welcome-text">
          Welcome to Bhavya's personal chat page!
        </div>
        <div className="ca-home__name-container">
          <div className="ca-home__name-heading">
            Please enter your name here!
          </div>
          <div className="ca-home__name-field">
            <label>Name: </label>
            <input
              type="text"
              placeholder="your name here..."
              onChange={getUsername}
              required />
          </div>
          <div className="ca-home__button-container">
            <Button type="submit"
              className="ca-button--primary"
              disabled={isDisabled()}>
              Start Chat!
            </Button>
          </div>
        </div>
      </form>
    )
  }
}

export default RightContainer
