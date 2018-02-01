import React from 'react';
import s from 'styled-components';
import { observer, inject } from 'mobx-react';
import { NavLink, withRouter } from 'react-router-dom';
import { Input } from './Common';
import userIcon from '../Resources/user.png';
import userActiveIcon from '../Resources/user_active.png';
import arrowRight from '../Resources/arrowRight.png';
import burger from '../Resources/burger.png';
import MobileModal from '../Containers/MobileModal';


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
        padding: 0 20px;
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
    @media (max-width: 700px) { 
        display: none;
    }
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

const Link = ({ to, title }) => (
    <NavLink to={to} activeStyle={{ color: '#55b9ff' }} exact>{title}</NavLink>
);

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpened: false
        };
    }

    setWallet = () => {
        this.props.userStore.setWallet(this.wallet.value);
    }

    modalState = opened => this.setState({ modalOpened: opened });

    render() {
        const { userStore } = this.props;
        return (
            <Container>
                <Left>
                    <Link to="/" title="Home" />
                    <User src={userStore.walletId ? userActiveIcon : userIcon} />
                    {userStore.walletId ?
                        <Wallet>{userStore.secureWallet}</Wallet> :
                        <React.Fragment>
                            <Input
                                placeholder="login with your CPT wallet address"
                                innerRef={e => this.wallet = e}
                                onKeyPress={e => e.charCode === 13 && this.setWallet()}
                            />
                            <Login src={arrowRight} onClick={this.setWallet} />
                        </React.Fragment>
                    }
                </Left>
                <Right>
                    {userStore.walletId &&
                    <Link to="/tickets" title="My Tickets" />
                    }
                    <Link to="/manual" title="How To Play" />
                    <NavLink to="http://google.ru">Eng</NavLink>
                    <Burger onClick={() => this.modalState(true)} />
                    <MobileModal isOpen={this.state.modalOpened} />
                </Right>
                <MobileModal
                    isOpen={this.state.modalOpened}
                    closeModal={() => this.modalState(false)}
                />
            </Container>
        );
    }
}

export default withRouter(inject('userStore')(observer(Header)));
