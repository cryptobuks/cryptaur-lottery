import React from 'react';
import s from 'styled-components';
import { Jackpot, PrizePool } from '../Components';

const Content = s.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Home = () => (
    <Content>
        <PrizePool usd={9999.10} cpt={1000234.99} />
        <Jackpot usd={9999.10} cpt={40.99} numbers={4} total={20} />
        <Jackpot usd={9999.10} cpt={100.99} numbers={5} total={36} />
        <Jackpot usd={9999.10} cpt={2000.99} numbers={6} total={45} />
    </Content>
);

export default Home;
