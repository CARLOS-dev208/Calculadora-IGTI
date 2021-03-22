import { Component } from "react";

export class Display extends Component {
  render() {
    return (
      <div className={'display'}>
        <p>
          {this.props.value}
        </p>
      </div>
    )
  }
}
