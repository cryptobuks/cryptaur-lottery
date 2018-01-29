import s from 'styled-components';

const Container = s.div`
    margin-top: 100px;
    background-color: #fff;  
    border-radius: 10px;
    position: relative;
    max-width: 960px;
    width: 100%;
    box-shadow: 0 25px 55px 0 rgba(57, 22, 102, 0.35);
    z-index: 1;
`;

const Title = s.p`
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    color: #634285;
    margin-bottom: 32px;
`;

const MainTitle = s.h2`
    font-size: 48px;
    color: #634285;
    font-weight: 700;
    margin-bottom: 21px;
    text-transform: uppercase;
`;

const SecondTitle = s.p`
    font-size: 24px;
    color: #634285;
    opacity:0.5;
    margin-bottom: 0;
`;

const Balls = s.div`
    position: absolute;
    background: url(${props => props.balls}) no-repeat;
    width: 340px;
    height: 270px;
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


const BgEffect = s.div`
    position: absolute;
    z-index: -1;
    width: calc(100% - ${props => props.position * 10}px);
    top: -${props => props.position * 5}px;
    left: ${props => props.position * 10}px;
    background-color: #fff;
    height: 100%;
    opacity: 0.2;
    border-radius: 10px;
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

export { Container, Title, MainTitle, SecondTitle,
    TimerContainer, InfoContainer, Balls, Timeout, BgEffect, Buy };
