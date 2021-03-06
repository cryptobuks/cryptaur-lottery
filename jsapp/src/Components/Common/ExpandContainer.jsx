import React from 'react';
import s from 'styled-components';
import { Title } from './index';
import expandIcon from '../../Resources/expand.png';


const Container = s.div`
    background-color: ${props => props.bgColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

const Expander = s.img`
    position: absolute;
    top: 90px;
    right: 81px;
    cursor: pointer;
    transform: ${props => !props.expanded && 'rotate(180deg)'};
    @media (max-width: 500px) {
        top: 36px;
        right: 20px;
    }
    
`;

const Head = s.div`
    cursor: pointer;
    text-align: center;
    width: 100%;
`;

export default class ExpandContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    expand = () => this.setState({ expanded: !this.state.expanded });

    render() {
        const { title, bgColor, children } = this.props;
        return (
            <Container bgColor={bgColor}>
                <Head onClick={this.expand}>
                    <Title white>{title}</Title>
                    <Expander
                        src={expandIcon}
                        expanded={this.state.expanded}
                    />
                </Head>
                {this.state.expanded && children}
            </Container>
        );
    }
}