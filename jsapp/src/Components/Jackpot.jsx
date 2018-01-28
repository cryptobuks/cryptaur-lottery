import React from 'react';
import s from 'styled-components';
import * as balls from '../Resources/balls';
import { Progress, Tickets, Archive, HowToPlay } from './index';

const Container = s.div`
    margin-top: 100px;
    background-color: #fff;  
    border-radius: 10px;
    position: relative;
    max-width: 960px;
    width: 100%;
    box-shadow: 0 25px 55px 0 rgba(57, 22, 102, 0.35);
`;

const Title = s.p`
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    color: #634285;
    margin-bottom: 32px;
`;

const CptPrice = s.h2`
    font-size: 48px;
    color: #634285;
    font-weight: 700;
    margin-bottom: 21px;
`;

const UsdPrice = s.p`
    font-size: 24px;
    color: #634285;
    opacity:0.5;
    margin-bottom: 0;
`;

const Balls = s.div`
    position: absolute;
    background: url(${props => props.balls}) no-repeat;
    width: 340px;
    height: 250px;
    right: -50px;
    top: -54px;
`;

const InfoContainer = s.div`
    padding: 34px 80px 0;
    > * {
        margin-top: 0;
    }
`;

const TimerContainer = s.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`;

const Timeout = s.p`
    color: #634285;
    font-size: 12px;
    text-transform: uppercase;
    margin-bottom: 19px;
    margin-top: 0;
`;

const Buy = s.div`
    color: #ff0099;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    text-transform: uppercase;
    padding: 33px 0;
    cursor: pointer;
`;

export default class Jackpot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    expand = () => this.setState({ expanded: !this.state.expanded });

    render() {
        const {
            usd, cpt, total, numbers
        } = this.props;
        return (
            <Container>
                <Balls balls={balls[`ball${numbers}${total}`]} />
                <InfoContainer>
                    <Title>Jackpot</Title>
                    <CptPrice>{`${cpt} CPT`}</CptPrice>
                    <UsdPrice>{`${usd} USD`}</UsdPrice>
                </InfoContainer>
                <TimerContainer>
                    <Timeout>time left 08:51:53</Timeout>
                    <Progress value={50} maxValue={100} />
                </TimerContainer>
                <Buy onClick={this.expand}>buy ticket 0.003 CPT</Buy>
                {this.state.expanded &&
                <React.Fragment>
                    <Tickets total={total} numbers={numbers} />
                    <Archive />
                    <HowToPlay total={total} numbers={numbers} />
                </React.Fragment>
                }
            </Container>
        );
    }
}

