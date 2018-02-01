import React from 'react';
import s from 'styled-components';
import { Ticket } from './';
import { Title as BlockTitle } from './Common';
import TicketContainer from './Common/TicketContainer';

const Tickets = s.div`
    background-color: #f5f0ff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
`;

const MyTicket = ({ numbers, total }) => (
    <TicketContainer
        title="You Have"
        mainTitle="1 Ticket"
        secondTitle="​"
        total={total}
        numbers={numbers}
        noExpand
    >
        <Tickets>
            <BlockTitle>Tickets you bought</BlockTitle>
            <Ticket total={total} numbers={numbers} selected={[1, 3, 5, 7]} readonly />
            <Ticket total={total} numbers={numbers} selected={[1, 3, 5, 7]} readonly />
        </Tickets>
    </TicketContainer>
);

export default MyTicket;
