import React from 'react';
import s from 'styled-components';
import { Header, Footer, Jackpot, PrizePool } from '../Components';

const Content = s.div`
    background: linear-gradient(to bottom, #3da3f7, #9917ff);
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100%;
`;

const Home = () => (
    <React.Fragment>
        <Header />
        <Content>
            <PrizePool usd={9999.10} cpt={1000234.99} />
            <Jackpot usd={9999.10} cpt={1000234.99} numbers={4} total={20} />
            <Jackpot usd={9999.10} cpt={1000234.99} numbers={5} total={36} />
            <Jackpot usd={9999.10} cpt={1000234.99} numbers={6} total={45} />
            <Footer />
        </Content>
    </React.Fragment>
);

export default Home;
