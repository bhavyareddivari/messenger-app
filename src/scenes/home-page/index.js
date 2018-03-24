// libs
import React, { Component } from 'react'

// components
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import LeftContainer from './components/_left-container'
import RightContainer from './components/_right-container'

// styles
import './_style.css'

class HomePage extends Component {
  render() {
    return (
      <div className="ca-home">
        <Header />
        <div className="ca-home__welcome-container">
          <LeftContainer />
          <RightContainer />
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage
