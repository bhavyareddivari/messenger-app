// libs
import React, { Component } from 'react'

// components
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'

// styles
import './_style.css'

class ChatWindow extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          Get started
        </p>
      <Footer/>
      </div>
    );
  }
}

export default ChatWindow
