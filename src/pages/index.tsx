import styled from "styled-components";
import React, {useState} from "react";
import Calculator from '../components/Calculator'
import ValueList from '../components/ValueList'
import Head from "next/head";

export default function IndexPage() {
    const [deposit, setDeposit] = useState(0);
    const [rent, setRent] = useState(0);

    const handleDeposit = (deposit: number) => {
        setDeposit(() => deposit)
    }

    const handleRent = (rent: number) => {
        setRent(() => rent)
    }
    return (
        <>
            <Head>
                <title>Calculation</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <AppContainer>
                <Header >
                    <h1>최대 보증금 전환 계산기</h1>
                </Header>
                <Notice>참고용으로 만든것입니다.</Notice>
                <Content >
                    <Calculator deposit={deposit} rent={rent} onDeposit={handleDeposit} onRent={handleRent}/>
                    <ValueList deposit={deposit} rent={rent}/>
                </Content>
                <Notice>참고용으로 만든것입니다.</Notice>
            </AppContainer>
        </>
    );
}

const Header = styled.header`

  background-color: #333333;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  color: hsl(0, 0%, 100%);
  padding: 20px 0;
`

const Notice = styled.h1`
  text-align: center;
  color: red;
  font-weight: bold;
  margin-top: 10px;
`;

const Content = styled.div`
  max-width: 480px;
  margin: 28px auto;
  font-size: 14px;
`;


const AppContainer = styled.div`
  .content__input > h3 {
    font-weight: bold;
    margin: 10px 0;
  }

  .content__input > input {
    width: 100%;
    height: 40px;
    font-size: 14px;
    padding-left: 10px;
    margin-bottom: 10px;
    border: 1px solid #3f3aff;
  }

  .content__values > li:nth-child(2n-1) {
    font-weight: 900;
    margin: 28px 0 15px 0;
  }

  .content__result {
    border-top: 1px solid #d6d6d6;
    padding-top: 30px;
  }

  .content__values > li:nth-child(11) {
    color: #3f3aff;
  }

  .content__values > li:nth-child(13) {
    color: #3f3aff;
  }

  .notice {
    text-align: center;
    color: red;
    font-weight: bold;
    margin-top: 10px;
  }
`