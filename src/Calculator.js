import React, { Component } from 'react';

class Calculator extends Component {
    handleDeposit = e => {
        this.props.onDeposit(e.target.value)
    }

    handleRent = e => {
        this.props.onRent(e.target.value)
    }

    render() {
        const {deposit,  rent} = this.props;
        return (
            <div className="content__input">
            <h3>보증금</h3>
            <input type="number" step="0" value={deposit} onChange={this.handleDeposit} placeholder="보증금을 입력해주세요" />
            <h3>임대료</h3>
            <input type="number" value={rent} onChange={this.handleRent} placeholder="임대료를 입력해주세요" />
        </div>
        );
    }
}

export default Calculator;