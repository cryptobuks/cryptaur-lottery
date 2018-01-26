import React from 'react';
import s from 'styled-components';
import { Number } from './Common';

const Item = s.div`
display: flex;
align-items: center;
`;

const Numbers = s.div`
    display: flex;
`;

const ArchiveItem = ({ numbers }) => (
    <Item>
        <Numbers>
            {numbers.map(i => <Number value={i} selected simple />)}
        </Numbers>
    </Item>
);

export default ArchiveItem;
