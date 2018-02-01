import React from 'react';
import s from 'styled-components';
import Modal from 'react-modal';
import { inject, observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';
import close from '../Resources/close.png';
import user from '../Resources/user_lg.png';
import userActive from '../Resources/user_active_lg.png';


const style = {
    overlay: {
        backgroundColor: 'rgba(37, 27, 54, 0.95)',
        zIndex: 10
    },
    content: {
        maxWidth: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        flexDirection: 'column',
        border: 'none',
        margin: '20px',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: 0
    }
};

const Container = s.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
`;

const Close = s.div`
    background-image: url(${close});
    width: 22px;
    height: 22px;
    position: absolute;
    right: 0;
    cursor: pointer;
`;

const Login = s.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex-shrink: 0;
    p {
        color: white;
        font-size: 16px;
        font-weight: 300;
        line-height: 24px;
        max-width: 170px;
        text-align: center;
    }
`;

const NavItem = s.div`
    padding-bottom: 30px;
    border-bottom: 1px solid ${props => props.active ? '#fff' : 'rgba(245,240,255, 0.2)'};
    width: 100%;
    text-transform: uppercase;
    text-align: center;
    font-size: 12px;
    margin-top: 30px;
    a {
        color: #fff;
        text-decoration: none;
    }
    &:last-child {
        border-bottom: none;
    }
`;

@observer
@inject('userStore')
export default class MobileModal extends React.Component {
    render() {
        const { isOpen, closeModal, userStore } = this.props;
        return (
            <Modal isOpen={isOpen} style={style}>
                <Container>
                    <Close onClick={closeModal} />
                    <Login>
                        <img src={userStore.walletId ? userActive : user} />
                        <p>{userStore.secureWallet || 'Enter your CPT wallet address to login'}</p>
                    </Login>
                    <NavItem active>
                        <NavLink to="/" onClick={userStore.logout}>Logout</NavLink>
                    </NavItem>
                    <div>
                        <NavItem>
                            <NavLink to="/" onClick={closeModal}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/tickets" onClick={closeModal}>My Tickets</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/manual" onClick={closeModal}>How To Play</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/english">English</NavLink>
                        </NavItem>
                    </div>
                </Container>
            </Modal>
        );
    }
}
