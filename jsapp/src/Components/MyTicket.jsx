import React from 'react';
import s from 'styled-components';
import {
    Container,
    Title,
    MainTitle,
    TimerContainer,
    InfoContainer,
    Balls,
    Timeout
} from './Common/TicketBase';
import { Progress, Ticket } from './';
import { Title as BlockTitle } from './Common';
import * as balls from '../Resources/balls';

const Tickets = s.div`
    background-color: #f5f0ff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
`;

const MyTicket = ({ numbers, total }) => (
    <Container>
        <Balls balls={balls[`ball${numbers}${total}`]} />
        <InfoContainer>
            <Title>You Have</Title>
            <MainTitle>1 Ticket</MainTitle>
        </InfoContainer>
        <TimerContainer>
            <Timeout>time left 08:51:53</Timeout>
            <Progress value={50} maxValue={100} />
        </TimerContainer>
        <Tickets>
            <BlockTitle>Tickets you bought</BlockTitle>
            <Ticket total={total} numbers={numbers} selected={[1, 3, 5, 7]} readonly />
            <Ticket total={total} numbers={numbers} selected={[1, 3, 5, 7]} readonly />
        </Tickets>
    </Container>
);

export default MyTicket;
