import React from 'react';
import s from 'styled-components';
import Number from './Number';

const Container = s.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const Info = s.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    text-transform: uppercase;
    font-size: 12px;
    color: #ac99c2;
`;

const ClearSection = s.p`
    color: #8941ff;
    cursor: pointer;
`;

export default class Ticket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: []
        };
    }

    selectBall = (n) => {
        console.log(n);

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

    render() {
        const { total, numbers, id } = this.props;
        const { selected } = this.state;
        return (
            <React.Fragment>
                <Info>
                    <p>Select {numbers} numbers</p>
                    <p>Ticket №{id}</p>
                    <ClearSection onClick={this.clearTicket}>Clear Section</ClearSection>
                </Info>
                <Container>
                    {[...Array(total)].map((x, i) =>
                        (<Number
                            value={i + 1}
                            onClick={() => this.selectBall(i + 1)}
                            selected={selected.includes(i + 1)}
                        />))}
                </Container>
            </React.Fragment>
        );
    }
}
