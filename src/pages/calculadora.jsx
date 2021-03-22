import React, { Component } from "react";
import { Button } from "../components/button";
import { Display } from "../components/display";
import '../styles/components/calculadora.css'

export class Calculadora extends Component {
  initialState = { firstValue: 0, secondValue: 0, operator: 1, isSum: false }

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }
  putValue = (value) => {
    const lastValue = this.state.operator === 1 ? this.state.firstValue : this.state.secondValue;
    // eslint-disable-next-line default-case
    switch (this.state.operator) {
      case 1:
        this.setState({ firstValue: (lastValue * 10) + value });
        break;
      case 2:
        this.setState({ secondValue: (lastValue * 10) + value });
        break;
    }
  }

  getValue = () => {
    const { firstValue, secondValue, isSum, operator } = this.state;
    // eslint-disable-next-line default-case
    switch (operator) {
      case 1: return firstValue;
      case 2: return secondValue;
      case 3: return isSum ? firstValue + secondValue : firstValue - secondValue;
    }

  }
  pickOperation = (isSum) => {
    this.setState({ operator: 2, isSum })
  }

  execOperation = () => {
    this.setState({ operator: 3 })
  }

  clear = () => {
    this.setState(this.initialState);
  }

  render() {
    return (
      <div className={"calculadora"}>
        <div>
          <Display value={this.getValue()} />
        </div>
        <div className={'buttons'}>
          <Button display={"C"} onClick={() => this.clear()} />
          <Button display={"+/-"} />
          <Button display={"/"} />
          <Button display={"X"} />
          <Button display={"7"} onClick={() => this.putValue(7)} />
          <Button display={"8"} onClick={() => this.putValue(8)} />
          <Button display={"9"} onClick={() => this.putValue(9)} />
          <Button display={"+"} onClick={() => this.pickOperation(true)} />
          <Button display={"4"} onClick={() => this.putValue(4)} />
          <Button display={"5"} onClick={() => this.putValue(5)} />
          <Button display={"6"} onClick={() => this.putValue(6)} />
          <Button display={"-"} onClick={() => this.pickOperation(false)} />
          <Button display={"1"} onClick={() => this.putValue(1)} />
          <Button display={"2"} onClick={() => this.putValue(2)} />
          <Button display={"3"} onClick={() => this.putValue(3)} />
          <Button display={"0"} onClick={() => this.putValue(0)} />
          <Button display={","} />
          <Button display={"="} onClick={() => this.execOperation()} />
        </div>
      </div>
    );
  }
}
