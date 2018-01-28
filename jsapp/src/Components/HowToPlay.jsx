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
    padding-top: 30px;
    padding-bottom: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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

const Hint = s.p`
    font-size: 16px;
    font-weight: 300;
    text-align: center;
    color: #978aac;
    padding: 25px 0 50px;
`;

const HowToPlay = ({ numbers, total }) => (
    <Container>
        <Title white>The {numbers}x{total} Lottery Rules</Title>
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
                    <td><Number value={numbers} selected bordered noMargin /></td>
                    <td><Dash /></td>
                    <td>Jackpot</td>
                </tr>
                {[...Array(numbers - 2)].map((i, x) =>
                    (<tr>
                        <td><Number value={numbers - (x + 1)} selected bordered noMargin /></td>
                        <td><Dash /></td>
                        <td>
                            25% of the Prize Pool* /
                            The number of players who matched {numbers - (x + 1)} numbers
                        </td>
                    </tr>))}
            </tbody>
        </Table>
        <Hint>*70% of the ticket sales for one drawing go to the Prize Pool</Hint>
    </Container>
);

export default HowToPlay;
