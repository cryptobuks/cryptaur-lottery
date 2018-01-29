import React from 'react';
import * as balls from '../../Resources/balls';
import {
    Container,
    Title,
    MainTitle,
    SecondTitle,
    TimerContainer,
    InfoContainer,
    Balls,
    Timeout,
    BgEffect,
    Buy
} from './TicketBase';
import { Progress } from '../index';

const TicketContainer = ({
    title, mainTitle, secondTitle, total, numbers, expanded, expand, noExpand, children
}) => (
    <Container>
        <Balls balls={balls[`ball${numbers}${total}`]} />
        <InfoContainer>
            <Title>{title}</Title>
            <MainTitle>{mainTitle}</MainTitle>
            <SecondTitle>{secondTitle}</SecondTitle>
        </InfoContainer>
        <TimerContainer>
            <Timeout>time left 08:51:53</Timeout>
            <Progress value={50} maxValue={100} />
        </TimerContainer>
        {!noExpand && <Buy onClick={expand}>buy ticket 0.003 CPT</Buy>}
        {(noExpand || expanded) && children
        }
        {[...Array(4)].map((x, i) => <BgEffect position={i + 1} />)}
    </Container>
);

export default TicketContainer;
