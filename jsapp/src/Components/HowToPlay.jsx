import React from 'react';
import s from 'styled-components';
import { ExpandContainer, Number } from './Common';

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
    <ExpandContainer title={`The ${numbers}${total} Lottery Rules`} bgColor="#21172f">
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
    </ExpandContainer>
);

export default HowToPlay;
