import React from 'react';
import s from 'styled-components';
import { HowToPlay } from '../Components';


const Content = s.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Manual = () => (
    <Content>
        <HowToPlay total={36} numbers={5} />
    </Content>
);

export default Manual;
