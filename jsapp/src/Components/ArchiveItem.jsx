import React from 'react';
import s from 'styled-components';
import { Number } from './Common';

const Item = s.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 30px 80px;
    border-bottom: 1px solid #473d5a;
    &:first-of-type {
        padding-top: 0;
    }
`;

const Numbers = s.div`
    display: flex;
`;

const Info = s.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #978aac;
    font-size: 12px;
    text-transform: uppercase;
    margin-bottom: 30px;
    * {
        margin: 0;
    }
    strong {
        color: #fff;
        font-weight: 400;
    }
`;

const ArchiveItem = ({ numbers }) => (
    <Item>
        <Info>
            <p>2018.01.22 11:00</p>
            <p>#31</p>
            <p>Jackpot <strong>45.0041 CPT</strong></p>
        </Info>
        <Numbers>
            {numbers.map(i => <Number value={i} selected simple />)}
        </Numbers>
    </Item>
);

export default ArchiveItem;
