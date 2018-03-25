// libs
import React from 'react'

// styles
import './_style.css'

const Button = ({className, children, disabled}) => {
  const getClassName = () => `ca-button ${className || ''}`
  const isDisabled = () => disabled || false
  return (
    <button className={getClassName()}
      disabled={isDisabled()}>
      {children}
    </button>
  )
}

export default Button
