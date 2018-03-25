// libs
import React, { Component } from 'react'

// components
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import LeftContainer from './components/_left-container'
import RightContainer from './components/_right-container'
import ChatPage from '../chat-page/index'

// styles
import './_style.css'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      isSubmitted: false
    }
  }

  // get the name entered by the user
  getUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  // send username to chat window
  submitUsername = (e) => {
    // prevent the page from refresh
    e.preventDefault()
    this.setState({
      isSubmitted: true,
      username: this.state.username
    })
  }
  render() {
    const props = {
      getUsername: this.getUsername,
      submitUsername: this.submitUsername,
      username: this.state.username,
      isSubmitted: this.state.isSubmitted
    }
    // if form is submitted show chat page, else home page
    return (
      <div className="ca-home">
        <Header />
        {(this.state.isSubmitted)
        ? <ChatPage username={this.state.username}/>
        : <div className="ca-home__welcome-container">
            <LeftContainer />
            <RightContainer {...props}/>
          </div>
        }
        <Footer />
      </div>
    )
  }
}

export default HomePage
