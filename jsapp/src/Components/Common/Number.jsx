import React from 'react';
import s from 'styled-components';

const Container = s.span`
    font-size: 18px;
    color: ${props => props.selected ? '#fff' : '#634285'};
    cursor: pointer;
    min-width: 40px;
    min-height: 40px;
    text-align: center;
    background: ${props => props.selected && (props.simple ? '#4f3a73' : 'linear-gradient(-45deg, #f962ff, #3fbdff)')};
    border-radius: 50%;
    padding-top: 11px;
    margin-right: 12px;
    margin-bottom: 10px;
    user-select: none;
`;

const Number = ({ value, ...props }) => (
    <Container {...props}>{value}</Container>
);

export default Number;