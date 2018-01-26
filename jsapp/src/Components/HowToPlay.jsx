import React from 'react';
import s from 'styled-components';
import { Title, Number } from './Common';

const Container = s.div`
    padding: 0 80px;
    background-color: #21172f;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Table = s.table`
    width: 100%;
    color: #fff;
    font-size: 18px;
    font-weight: 300;
    thead {
        font-size: 14px;
        color: #978aac;
        td {
            padding-bottom: 30px;
        }
    }
    td {
        padding: 10px 0;
        vertical-align: middle;
    }
`;

const Dash = s.div`
  background-color: #fff;
  opacity: 0.251;
  width: 20px;
  height: 1px;
  margin: 0 70px 0 48px;
`;

const HowToPlay = () => (
    <Container>
        <Title white>The 5x36 Lottery Rules</Title>
        <Table>
            <thead>
                <tr>
                    <td width="60px">Numbers Matched</td>
                    <td />
                    <td>Prize</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Number value={5} selected bordered noMargin /></td>
                    <td><Dash /></td>
                    <td>Jackpot</td>
                </tr>
                <tr>
                    <td><Number value={4} selected bordered noMargin /></td>
                    <td><Dash /></td>
                    <td>25% of the Prize Pool* / The number of players who matched 4 numbers</td>
                </tr>
                <tr>
                    <td><Number value={3} selected bordered noMargin /></td>
                    <td><Dash /></td>
                    <td>25% of the Prize Pool* / The number of players who matched 4 numbers</td>
                </tr>
                <tr>
                    <td><Number value={2} selected bordered noMargin /></td>
                    <td><Dash /></td>
                    <td>25% of the Prize Pool* / The number of players who matched 4 numbers</td>
                </tr>
            </tbody>
        </Table>
    </Container>
);

export default HowToPlay;
