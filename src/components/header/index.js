// libs
import React from 'react'

// styles
import "./_style.css";

// images
import logo from './chat.png'

const Header = () => (
  <div className="ca-header">
    <div className="ca-header__logo-container">
      <header>Chat Live</header>
      <img alt="logo" className="ca-header__logo" src={logo} />
    </div>
  </div>
)

export default Header
