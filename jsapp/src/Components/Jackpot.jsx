import React from 'react';
import s from 'styled-components';
import * as balls from '../Resources/balls';
import { Progress, Tickets, Archive, HowToPlay } from './index';
import { Container, Title, MainTitle, SecondTitle, TimerContainer, InfoContainer, Balls, Timeout } from './Common/TicketBase';

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
                    <MainTitle>{`${cpt} CPT`}</MainTitle>
                    <SecondTitle>{`${usd} USD`}</SecondTitle>
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

