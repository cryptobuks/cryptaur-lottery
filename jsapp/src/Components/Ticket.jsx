import React from 'react';
import s from 'styled-components';
import Number from './Number';

const Container = s.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export default class Ticket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: []
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

    render() {
        const { total, numbers } = this.props;
        const { selected } = this.state;
        return (
            <Container>
                {[...Array(total)].map((x, i) =>
                    (<Number
                        value={i + 1}
                        onClick={this.selectBall}
                        disabled={selected.length >= numbers}
                    />))}
            </Container>
        );
    }
}
