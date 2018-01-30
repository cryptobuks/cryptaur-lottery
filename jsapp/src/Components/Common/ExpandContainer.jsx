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
    transform: ${props => !props.expanded && 'rotate(180deg)'}
    
`;

const Childs = s.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: ${props => !props.expanded ? '0%' : '100%'};
    transition: height 0.5s;
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
                <Title white>{title}</Title>
                <Expander
                    src={expandIcon}
                    onClick={this.expand}
                    expanded={this.state.expanded}
                />
                {this.state.expanded && children}
            </Container>
        );
    }
}