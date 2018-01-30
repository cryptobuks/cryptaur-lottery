import React from 'react';
import s from 'styled-components';
import leaf from '../Resources/leaf.png';

const Container = s.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    margin-top: 80px;
    margin-bottom: 60px;
    > * {
        margin-top: 0;
    }
`;

const Title = s.p`
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 32px;
    margin-top: 19px;
`;

const CptPrice = s.h2`
    font-size: 36px;
    margin-bottom: 15px;
    @media (max-width: 500px) {
        font-size: 28px;
    }
`;

const UsdPrice = s.p`
    font-size: 18px;
    opacity: 0.5;
    margin-bottom: 0;
    @media (max-width: 500px) {
        font-size: 14px;
    }
`;

const Leaf = s.div`
    position: absolute;
    background: url(${leaf}) no-repeat;
    width: 72px;
    height: 155px;
    right: -72px;
`;

const LeafLeft = s(Leaf)`
    transform: scaleX(-1);
    left: -72px;
`;

const PrizePool = ({ cpt, usd }) => (
    <Container>
        <Leaf />
        <LeafLeft />
        <Title>Prize Pool</Title>
        <CptPrice>{`${cpt} CPT`}</CptPrice>
        <UsdPrice>{`${usd} USD`}</UsdPrice>
    </Container>
);

export default PrizePool;
