import React from 'react';
import s from 'styled-components';
import Modal from 'react-modal';
import { Title } from '../Components/Common';
import close from '../Resources/close.png';

const style = {
    overlay: {
        backgroundColor: 'rgba(37, 27, 54, 0.95)',
        zIndex: 10
    },
    content: {
        maxWidth: '800px',
        margin: 'auto',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f5f0ff',
        flexDirection: 'column',
        padding: 0
    }
};

const Results = s.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 80px 60px;
    min-height: 200px;
`;

const Item = s.div`
    font-size: 12px;
    color: #978aac;
    text-transform: uppercase;
    margin-bottom: 12px;
    span:first-child {
        margin-right: 70px;
    }
    span:last-child {
        float: right;
        color: #6e508f;
    }
`;

const Col = s.div`
     display: flex;
    flex-direction: column;
`;


const Winners = s.div`
    width: 100%;
    background-color: #fff;
    padding: 40px 80px;
    height: 100%;
`;

const Winner = s.div`
    padding-top: 20px;
    ::last-of-type {
    div {
        border-bottom: none;
    }
    }
 p {
    font-size: 18px;
    color: #8941ff;
    margin-bottom: 20px;
 }
     strong {
        color: #6e508f;
        font-weight: 400;
    }
`;

const Info = s.div`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    font-size: 12px;
    color: #978aac;
    padding-bottom: 20px;
    border-bottom: 1px solid #f5f0ff;
`;

const Close = s.div`
    background-image: url(${close});
    width: 22px;
    height: 22px;
    float: right;
    margin-top: 82px;
    float: right;
    position: absolute;
    right: 80px;
    cursor: pointer;
`;

const Head = s.div`
    display: block;
    > * {
        display: inline-block;
    }
`;

const HistoryModal = ({ isOpen, closeModal }) => (
    <Modal isOpen={isOpen} style={style}>
        <Head>
            <Title>Winners</Title>
            <Close onClick={closeModal} />
        </Head>
        <Results>
            <Col>
                <Item>
                    <span>Lottery</span><span>5x36</span>
                </Item>
                <Item><span>Draw</span><span>33</span></Item>
                <Item><span>Date</span><span>2018.01.24 11:00</span></Item>
                <Item><span>Win Numbers</span><span>1121313536</span></Item>
                <Item><span>Tickets</span><span>195</span></Item>
                <Item><span>Collected</span><span>0.585 CPT</span></Item>
            </Col>
            <Col>
                <Item><span>Paid</span><span>0.585 CPT</span></Item>
                <Item><span>To Jackpot</span><span>0.585 CPT</span></Item>
                <Item><span>To Reserve</span><span>0.585 CPT</span></Item>
                <Item><span>Jackpot</span><span>0.585 CPT</span></Item>
                <Item><span>Reserve</span><span>0.585 CPT</span></Item>
            </Col>
        </Results>
        <Winners>
            <Winner>
                <p>0x1cdf5fca9803de8592769178c26f56fef8e9a8bb</p>
                <Info>
                    <span>Guess <strong>2</strong> numbers</span>
                    <span>Win <strong>0.005775</strong> CPT</span>
                </Info>
            </Winner>
            <Winner>
                <p>0x1cdf5fca9803de8592769178c26f56fef8e9a8bb</p>
                <Info>
                    <span>Guess 2 numbers</span>
                    <span>Win 0.005775 CPT</span>
                </Info>
            </Winner>
            <Winner>
                <p>0x1cdf5fca9803de8592769178c26f56fef8e9a8bb</p>
                <Info>
                    <span>Guess 2 numbers</span>
                    <span>Win 0.005775 CPT</span>
                </Info>
            </Winner>
        </Winners>
    </Modal>
);

export default HistoryModal;

