import React from 'react';
import s from 'styled-components';
import { Number } from './Common';

const Container = s.div`
 padding: 0 80px;
     @media (max-width: 900px) {
        padding: 0 40px;
    }
    @media (max-width: 500px) {
        padding: 0 20px;
    }
`;

const Numbers = s.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 60px;
     @media (max-width: 350px) {
        margin-bottom: 18px;
    }
`;

const Info = s.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.readonly ? 'space-around' : 'space-between'};
    width: 100%;
    text-transform: uppercase;
    font-size: 12px;
    color: #ac99c2;
    margin-bottom: 40px;
    * {
        margin: 0;
    }
`;

const ClearSection = s.p`
    color: #8941ff;
    cursor: pointer;
    text-transform: uppercase;
    text-align: center;
    font-size: 12px;
    @media (max-width: 350px) {
        margin-bottom: 30px;
    }
`;

export default class Ticket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: props.selected || []
        };
    }

    selectBall = (n) => {
        let selected = [...this.state.selected];

        if (selected.includes(n)) {
            selected = selected.filter(i => n !== i);
        } else if (selected.length < this.props.numbers) {
            selected.push(n);
        }

        this.setState({ selected });
    }

    clearTicket = () => {
        this.setState({ selected: [] });
    }

    isMobile = () => window.matchMedia('(max-width: 350px)').matches;

    render() {
        const { total, numbers, id, readonly } = this.props;
        const { selected } = this.state;
        return (
            <Container>
                <Info readonly={readonly}>
                    {!readonly && <p>Select {numbers} numbers</p>}
                    <p>Ticket №{id}</p>
                    {!readonly && !this.isMobile() &&
                    <ClearSection onClick={this.clearTicket}>Clear Section</ClearSection>}
                </Info>
                <Numbers>
                    {[...Array(total)].map((x, i) =>
                        (<Number
                            value={i + 1}
                            onClick={() => !readonly && this.selectBall(i + 1)}
                            selected={selected.includes(i + 1)}
                        />))}
                </Numbers>
                {!readonly && this.isMobile() &&
                <ClearSection onClick={this.clearTicket}>Clear Section</ClearSection>}
            </Container>
        );
    }
}
