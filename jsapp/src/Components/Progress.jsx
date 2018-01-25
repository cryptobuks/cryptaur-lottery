import React from 'react';
import s from 'styled-components';


const BaseLine = s.div`
    height: 2px;
    width: 100%;
    background-color: #e4ddf1;
    position: relative;
`;

const ProgressLine = s.div`
    background-color: #ff0089;
    height: 2px;
    position: absolute:
    left: 0;
    width: ${props => props.value}%
`;

const Progress = ({ value, maxValue }) => (
    <BaseLine>
        <ProgressLine value={(value / maxValue) * 100} />
    </BaseLine>
);

export default Progress;
