import React from 'react';
import s from 'styled-components';

const Container = s.div`
    font-size: 18px;
    color: ${props => props.selected ? '#fff' : '#634285'};
    cursor: pointer;
    width: 40px;
    height: 40px;
    text-align: center;
    background: ${props => !props.bordered && props.selected && (props.simple ? '#4f3a73' : 'linear-gradient(-45deg, #f962ff, #3fbdff)')};
    border-radius: 50%;
    padding-top: 11px;
    margin: ${props => props.noMargin ? '0' : '0 12px 10px 0'};
    user-select: none;
    border: ${props => props.bordered && '1px solid #4d4559'}
`;

const Number = ({ value, ...props }) => (
    <Container {...props}>{value}</Container>
);

export default Number;
