// libs
import React from 'react'

// styles
import './_style.css'

const Button = ({className, children}) => {
  const getClassName = () => `ca-button ${className || ''}`
  return (
    <button className={getClassName()}>
      {children}
    </button>
  )
}

export default Button
