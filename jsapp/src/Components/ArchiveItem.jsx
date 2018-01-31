import React from 'react';
import s from 'styled-components';
import { Number } from './Common';
import HistoryModal from '../Containers/HistoryModal';

const Item = s.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 30px 80px;
    cursor: pointer;
    border-bottom: 1px solid #473d5a;
    &:first-of-type {
        padding-top: 0;
    }
    @media (max-width: 500px) {
        padding: 30px 20px;
    }
`;

const Numbers = s.div`
    display: flex;
    flex-wrap: wrap;
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

const Date = s.p`
    @media (max-width: 500px) {
        display: none;
    }
`;

export default class ArchiveItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modalOpened: false };
    }

    modalState = opened => this.setState({ modalOpened: opened });

    render() {
        const { numbers } = this.props;
        return (
            <Item onClick={() => this.modalState(true)}>
                <Info>
                    <Date>2018.01.22 11:00</Date>
                    <p>#31</p>
                    <p>Jackpot <strong>45.0041 CPT</strong></p>
                </Info>
                <Numbers>
                    {numbers.map(i => <Number value={i} selected simple />)}
                </Numbers>
                <HistoryModal
                    isOpen={this.state.modalOpened}
                    closeModal={(e) => {
                        e.stopPropagation();
                        this.modalState(false);
                    }}
                />
            </Item>
        );
    }
}
