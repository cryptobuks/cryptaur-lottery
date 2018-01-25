import React from 'react';
import s from 'styled-components';
import { observer, inject } from 'mobx-react';
import userIcon from '../Resources/user.png';

const Container = s.div`
    position: fixed;
    background-color: #2d2f37;
    top: 0;
    height: 100px;
    width: 100%;
    color: #fff;
    display: flex;
    flex-direction: row;
    text-transform: uppercase;
    font-size: 12px;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    z-index: 1;
`;

const Link = s.a`
    color: #fff;
    text-decoration: none;
    margin-right: 40px;
    &:last-child {
        margin-right: 0;
    }
`;

const Right = s.div`
    display: flex;
`;

const Left = s.div`
    display: flex;
`;

const Header = ({ demoStore }) => (
    <Container>
        <Left>
            <img src={userIcon} />
        </Left>
        <Right>
            <Link href="http://google.ru">My Tickets</Link>
            <Link href="http://google.ru">How To Play</Link>
            <Link href="http://google.ru">Eng</Link>
        </Right>
    </Container>
);

export default inject('demoStore')(observer(Header));
