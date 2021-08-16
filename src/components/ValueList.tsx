import React from "react";
import {changeComma} from "../utils/comma";

type Props = {
    deposit: number
    rent: number
}
const ValueList = ({ deposit, rent } : Props) => {

    return (
        <ul className="content__values">
            <li>전환 가능 임대료(임대료의 60%)</li>
            <li>{changeComma(Math.floor(rent * 0.6))}</li>
            <li>전환 가능 최종 임대료(5,000원 단위로) </li>
            <li>{changeComma(Math.floor((rent * 0.6) / 5000) * 5000)}</li>
            <li>최대 보증금 전환시 월 임대료 </li>
            <li>{changeComma(rent - Math.floor((rent * 0.6) / 5000) * 5000)}</li>
            <li>전환 가능 보증금(1,000,000원 단위로만 가능, 임대료 5천원당 100만원) </li>
            <li>{changeComma((Math.floor((rent * 0.6) / 5000)*5000) / 5000 * 1000000)}</li>
            <li>최대 전환시 최종 보증금</li>
            <li>{changeComma(((Math.floor((rent * 0.6) / 5000)*5000) / 5000 * 1000000)+(deposit))}</li>
            <li className="content__result">
                전환 가능 임대료(임대료의 60%)계약시 보증금 얼마를 마련해야 하지?
            </li>
            <li>{changeComma(deposit / 10)}</li>
            <li>계약 이후 최대전환시 보증금 얼마를 추가로 내야할까?</li>
            <li>{changeComma(((Math.floor((rent * 0.6) / 5000)*5000) / 5000 * 1000000)+(deposit)-deposit/10)}</li>
        </ul>
    );
};


export default ValueList;
