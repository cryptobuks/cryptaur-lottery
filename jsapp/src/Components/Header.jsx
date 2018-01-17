import React from 'react';
import s from 'styled-components';
import { observer, inject } from 'mobx-react';


const Container = s.div`
    color: red;
`;

const Header = ({ demoStore }) => (
    <Container>
        Hello! OUT: {demoStore.count}
        <button onClick={() => demoStore.sum()}>SET</button>
    </Container>
);

export default inject('demoStore')(observer(Header));
