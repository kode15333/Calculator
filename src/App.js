import React, { Component } from 'react';
import "./App.css";
import Calculator from "./Calculator";
import ValueList from "./ValueList";


class App extends Component {
  state ={
    deposit : 0,
    rent : 0
  }

  handleDeposit = deposit => {
    this.setState({
      deposit : deposit
    })
  }

  handleRent = rent => {
    this.setState({
      rent : rent
    })
  }

  render() {
    const {deposit, rent } = this.state;
    return (
      <div className="App">
      <header className="header">
          <h1>최대 보증금 전환 계산기</h1>
      </header>
      <h1 className="notice">!!!!!!!! 참고용으로 만든것입니다 !!!!!!!! </h1>
      <div className="content">
          <Calculator deposit={deposit} rent={rent} onDeposit={this.handleDeposit} onRent={this.handleRent} />
          <ValueList deposit={deposit} rent={rent} />
      </div>
      <h1 className="notice">참고용으로 만든것입니다.</h1>
  </div>
    );
  }
}

export default App;
