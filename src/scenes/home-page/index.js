// libs
import React, { Component } from 'react'

// components
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'

// styles
import './_style.css'

class HomePage extends Component {
  render() {
    return (
      <div className="ca-home">
        <Header />
        <div className="ca-home__container">
          Welcome
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage
