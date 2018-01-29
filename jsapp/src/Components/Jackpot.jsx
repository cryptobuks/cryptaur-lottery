import React from 'react';
import { Tickets, Archive, HowToPlay } from './index';
import TicketContainer from './Common/TicketContainer';


export default class Jackpot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    expand = () => this.setState({ expanded: !this.state.expanded });

    render() {
        const {
            usd, cpt, total, numbers
        } = this.props;
        return (
            <TicketContainer
                title="Jackpot"
                mainTitle={`${cpt} CPT`}
                secondTitle={`${usd} USD`}
                total={total}
                numbers={numbers}
                expanded={this.state.expanded}
                expand={this.expand}
            >
                <Tickets total={total} numbers={numbers} />
                <Archive />
                <HowToPlay total={total} numbers={numbers} />
            </TicketContainer>
        );
    }
}

