import React from 'react';
import s from 'styled-components';
import logo from '../Resources/cryptaur.png';
import fb from '../Resources/facebook.png';
import tg from '../Resources/telegram.png';
import tw from '../Resources/twitter.png';

const Container = s.div`
    display: flex;
    padding: 40px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const Text = s.p`
    font-size: 12px;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
`;

const Left = s.div`
    display: flex;
    align-items: center;
    > * {
        margin-right: 20px;
    }
`;

const Link = s.a`
    text-decoration: none;
`;

const Footer = () => (
    <Container>
        <Left>
            <Text>Follow Us</Text>
            <a href="https://www.facebook.com/cryptaur.ru"><img src={fb} /></a>
            <a href="https://twitter.com/cryptaur_ru"><img src={tw} /></a>
            <a href="https://t.me/cryptaur_chat_RU"><img src={tg} /></a>
        </Left>
        <img src={logo} />
        <div>
            <Link href="mailto:info@cryptaur.com">
                <Text>info@cryptaur.com</Text>
            </Link>
        </div>
    </Container>
);

export default Footer;

