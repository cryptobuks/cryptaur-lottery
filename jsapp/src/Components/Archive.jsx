import React from 'react';
import s from 'styled-components';
import { Title } from './Common';
import ArchiveItem from './ArchiveItem';

const Container = s.div`
    background-color: #251b36;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ShowMore = s.div`
    font-size: 24px;
    color: #fff;
    padding: 60px 0;
    font-weight: 300;
    cursor: pointer;
`;

export default class Archive extends React.Component {
    render() {
        return (
            <Container>
                <Title white>Draw Archive</Title>
                <ArchiveItem numbers={[5, 10, 20, 30]} />
                <ArchiveItem numbers={[5, 10, 20, 30]} />
                <ArchiveItem numbers={[5, 10, 20, 30, 18, 15]} />
                <ShowMore>Show 10 more</ShowMore>
            </Container>
        );
    }
}