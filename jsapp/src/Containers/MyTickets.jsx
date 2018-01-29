import React from 'react';
import s from 'styled-components';
import { MyTicket } from '../Components';

const Content = s.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default class MyTickets extends React.Component {
    render() {
        return (
            <Content>
                <MyTicket numbers={4} total={20} />
                <MyTicket numbers={5} total={36} />
            </Content>
        );
    }
}