import React from 'react';
import s from 'styled-components';
import { Ticket, Button } from './';
import { Title } from './Common';
import addIcon from '../Resources/add.png';

const Container = s.div`
    background-color: #f5f0ff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
`;

const AddTicket = s.p`
    cursor: pointer;
    color: #ac99c2;
    font-size: 24px;
    font-weight: 300;
    margin: 0;
    line-height: 60px;
    user-select: none;
    &:before {
        float: left;
        background-image: url(${addIcon});
        width: 60px;
        height: 60px;
        content: " ";
        margin-right: 20px;
    }
`;

const Bottom = s.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #e4ddf1;
    padding: 40px 80px;
`;

export default class Tickets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets: 1
        };
    }

    addTicket = () => {
        this.setState({ tickets: this.state.tickets + 1 });
    }

    render() {
        const { tickets } = this.state;
        return (
            <Container>
                <Title>Tickets</Title>
                {[...Array(tickets)].map((x, i) => <Ticket {...this.props} id={i + 1} key={`tkt${i + 1}`} />)}
                <Bottom>
                    <AddTicket onClick={this.addTicket}>Add Ticket</AddTicket>
                    <Button title={`Buy ${tickets} tickets for 0.009 CPT`} />
                </Bottom>
            </Container>
        );
    }
}

