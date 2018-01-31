import React from 'react';
import s from 'styled-components';
import { observer, inject } from 'mobx-react';
import { NavLink, withRouter } from 'react-router-dom';
import { Input } from './Common';
import userIcon from '../Resources/user.png';
import arrowRight from '../Resources/arrowRight.png';
import burger from '../Resources/burger.png';


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
    z-index: 2;
    @media (max-width: 700px) {
        height: 60px;
    }
`;

const Right = s.div`
    display: flex;
    a {
    color: #fff;
    text-decoration: none;
    margin-right: 40px;
    user-select: none;
    white-space: nowrap;
    &:last-of-type {
        margin-right: 0;
    }
    }
    @media (max-width: 700px) {
        > *:not(:last-child) {
        display: none;
        }
    }
`;

const Left = s.div`
    display: flex;
    align-items: center;
    position: relative;
      a {
    color: #fff;
    text-decoration: none;
    margin-right: 40px;
    user-select: none;
    }
    @media (max-width: 700px) { 
        > *:first-child, input {
            display: none;
        }
    }
    
`;

const User = s.img`
    margin-right: 20px;
`;

const Login = s.img`
    position: absolute;
    width: 17px;
    height: 11px;
    right: 22px;
    cursor: pointer;
`;

const Wallet = s.p`
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
`;

const Burger = s.div`
    background-image: url(${burger});
    width: 20px;
    height: 15px;
    @media (min-width: 700px) { 
        display: none;
    }
`;

class Header extends React.Component {
    setWallet = () => {
        this.props.userStore.setWallet(this.wallet.value);
    }

    render() {
        const { userStore } = this.props;
        return (
            <Container>
                <Left>
                    <NavLink to="/" activeStyle={{ color: '#55b9ff' }} exact>Home</NavLink>
                    <User src={userIcon} />
                    {userStore.walletId ?
                        <Wallet>{userStore.walletId}</Wallet> :
                        <Input placeholder="login with your CPT wallet address" innerRef={e => this.wallet = e} />
                    }
                    <Login src={arrowRight} onClick={this.setWallet} />
                </Left>
                <Right>
                    {userStore.walletId &&
                    <NavLink to="/tickets" activeStyle={{ color: '#55b9ff' }} exact>My Tickets</NavLink>
                    }
                    <NavLink to="/manual" activeStyle={{ color: '#55b9ff' }} exact>How To Play</NavLink>
                    <NavLink to="http://google.ru">Eng</NavLink>
                    <Burger />
                </Right>
            </Container>
        );
    }
}

export default withRouter(inject('userStore')(observer(Header)));
