import React from 'react';
import s from 'styled-components';

const Container = s.span`
    font-size: 18px;
    color: ${props => props.selected ? '#fff' : '#634285'};
    cursor: pointer;
    width: 40px;
    height: 40px;
    text-align: center;
    background: ${props => props.selected && 'linear-gradient(-45deg, #f962ff, #3fbdff)'};
    border-radius: 50%;
    padding-top: 11px;
    margin-right: 12px;
    margin-bottom: 10px;
    user-select: none;
`;

export default class Number extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
    }

    onSelect = () => {
        if (!this.props.disabled || this.state.selected) {
            this.setState({
                selected: !this.state.selected
            }, () => this.props.onClick(this.props.value));
        }
    };

    render() {
        const { value } = this.props;
        return (
            <Container onClick={this.onSelect} selected={this.state.selected}>{value}</Container>
        );
    }
}
