import React from 'react';
import s from 'styled-components';
import Ticket from './Ticket';

const Container = s.div`
    background-color: #f5f0ff;
    padding: 72px 80px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = s.h1`
    font-size: 36px;
    color: #634285;    
    font-weight: 300;
    margin-top: 0;
`;

const Tickets = props => (
    <Container>
        <Title>Tickets</Title>
        <Ticket {...props} />
    </Container>
);

export default Tickets;
