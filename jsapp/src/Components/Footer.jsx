import React from 'react';
import s from 'styled-components';
import logo from '../Resources/cryptaur.png';
import fb from '../Resources/facebook.png';
import tg from '../Resources/telegram.png';
import tw from '../Resources/twitter.png';
import fb_lg from '../Resources/facebook_lg.png';
import tg_lg from '../Resources/telegram_lg.png';
import tw_lg from '../Resources/twitter_lg.png';

const Container = s.div`
    display: flex;
    padding: 40px;
    width: 100%;
    margin-top: 200px;
    justify-content: space-between;
    @media (max-width: 500px) {
        flex-direction: column-reverse;
        align-items: center;
        margin-top: 100px;
    }
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
    @media (max-width: 500px) {
        width: 100%;
        flex-direction: column;
        padding-top: 40px;
        > * {
        margin-right: 0;
    }
    }
`;

const Right = s.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 55%;
     @media (max-width: 500px) {
        width: 100%;
        flex-direction: column;
        padding-bottom: 40px;
        border-bottom: 2px solid #f5f0ff;
    }
`;

const Link = s.a`
    text-decoration: none;
    @media (max-width: 500px) {
        margin-top: 25px;
    }
`;

const Icons = s.div`
    display: flex;
    align-items: center;
    > *:not(:last-child) {
        margin-right: 20px;
    }
    @media (max-width: 500px) {
        justify-content: space-between;
        width: 100%;
        padding: 20px 40px 0;
    }
`;

const SocialLink = s.a`
    width: 18px;
    height: 18px;
    background-image: url(${props => props.icon});
    @media (max-width: 500px) {
        width: 36px;
        height: 36px;
        background-image: url(${props => props.iconLg});     
    }
`;

const Footer = () => (
    <Container>
        <Left>
            <Text>Follow Us</Text>
            <Icons>
                <SocialLink href="https://www.facebook.com/cryptaur.ru" icon={fb} iconLg={fb_lg} />
                <SocialLink href="https://twitter.com/cryptaur_ru"  icon={tw} iconLg={tw_lg} />
                <SocialLink href="https://t.me/cryptaur_chat_RU"  icon={tg} iconLg={tg_lg} />
            </Icons>
        </Left>
        <Right>
            <img src={logo} />
            <Link href="mailto:info@cryptaur.com">
                <Text>info@cryptaur.com</Text>
            </Link>
        </Right>
    </Container>
);

export default Footer;

