// libs
import React, { Component } from 'react'

// components
import Button from '../../../components/button/index'

class ChatFooter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputMessage: ''
    }
  }
  // get the message entered by user
  getMessage = (e) => {
    this.setState({
      inputMessage: e.target.value
    })
  }

  // handle form submit
  handleSubmit = (e) => {
    // prevent the page from refresh
    e.preventDefault()
    // sending callback to parent
    this.props.onSend(this.state.inputMessage)
    // Clear the input box after sending the message to parent
    this.setState({
      inputMessage: ''
    });
  }

  render () {
    return (
      <form className="ca-chat__footer" onSubmit={this.handleSubmit}>
        <div className="ca-chat__plus">+</div>
        <div className="ca-chat__message-field">
          <input
            type="text"
            placeholder="Message"
            name="message"
            value={this.state.inputMessage}
            onChange={this.getMessage}
            required />
        </div>
        <div className="ca-chat__send">
          <Button
            className="ca-button--primary"
            onClick={this.handleSubmit}>
            Send
          </Button>
        </div>
      </form>
    )
  }
}

export default ChatFooter
