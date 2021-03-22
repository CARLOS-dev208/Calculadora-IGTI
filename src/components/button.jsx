import React, { Component } from "react";
import '../styles/components/button.css'

export class Button extends Component {


  handleClick() {
    const { disabled, onClick } = this.props;
    if ((onClick) && (!disabled)) {
      this.props.onClick()
    }

  }

  render() {
    const cssButtonClass = this.props.disabled ? "button disabled" : "button";
    const cssButtonClassSel = this.props.select ? "button select" : "button";
    return (
      <div className={`${cssButtonClass} ${cssButtonClassSel}`} onClick={this.handleClick.bind(this)}>
        {this.props.display}
      </div>
    )
  }
}