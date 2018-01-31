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
        @media (max-width: 500px) {
        width: 40px;
        height: 40px;
        background-size: contain;
        @media (max-width: 500px) { 
            float: none;
            display: inline-block;
            vertical-align: middle;
            margin-top: -5px;
        }
    }
    }
    @media (max-width: 800px) {
        margin-bottom: 30px;
    }
    @media (max-width: 500px) {
        width: 100%;
        padding-bottom: 20px;
        border-bottom: 1px solid #e4ddf1;
        margin-bottom: 20px;
        font-size: 18px;
        line-height: 40px;
        text-align: center;
    }
`;

const Bottom = s.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #e4ddf1;
    padding: 40px 80px;
    @media (max-width: 900px) {
        padding: 40px;
    }
    @media (max-width: 800px) {
        flex-direction: column;
    }
    @media (max-width: 500px) {
        padding: 20px;
    }
`;

const TotalPrice = s.p`
    color: #8941ff;
    font-size: 18px;
    font-weight: 300;
    margin-top: 15px;
    @media (min-width: 500px) and (max-width: 800px) {
        margin-top: 30px;
    }
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

    isMobile = () => window.matchMedia('(max-width: 600px)').matches;

    render() {
        const { tickets } = this.state;
        return (
            <Container>
                <Title>Tickets</Title>
                {[...Array(tickets)].map((x, i) => <Ticket {...this.props} id={i + 1} key={`tkt${i + 1}`} />)}
                <Bottom>
                    <AddTicket onClick={this.addTicket}>Add Ticket</AddTicket>
                    <Button title={this.isMobile() ? `Buy ${tickets} tickets` : `Buy ${tickets} tickets for 0.009 CPT`} />
                    {this.isMobile() && <TotalPrice>{'0.05 CPT'}</TotalPrice>}
                </Bottom>
            </Container>
        );
    }
}

