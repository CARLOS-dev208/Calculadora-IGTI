import React, { Component } from "react";
import '../styles/components/button.css'

export class Button extends Component {

  handleClick() {
    if (this.props.onClick) {
      this.props.onClick()
    }

  }

  render() {
    return (
      <div className={'button'} onClick={this.handleClick.bind(this)}>
        {this.props.display}
      </div>
    )
  }
}