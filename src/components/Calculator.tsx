import React, {ChangeEvent, Component} from 'react';
import {changeComma} from "../utils/comma";

type Props = {
    deposit: number;
    rent: number;
    onDeposit: (deposit: number) => void;
    onRent: (rent: number) => void;
}
const Calculator = ({deposit, rent, onDeposit, onRent}: Props) => {
    const handleDeposit = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
        value = value.replace(/[^0-9]/g,'')
        onDeposit(Number(value))
    }

    const handleRent = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
        value = value.replace(/[^0-9]/g,'')
        onRent(Number(value))
    }


    return (
        <div className="content__input">
            <h3>보증금</h3>
            <input type="text"  value={changeComma(deposit)} onChange={handleDeposit} placeholder="보증금을 입력해주세요"/>
            <h3>임대료</h3>
            <input type="text"  value={changeComma(rent)} onChange={handleRent} placeholder="임대료를 입력해주세요"/>
        </div>
    );
}

export default Calculator;