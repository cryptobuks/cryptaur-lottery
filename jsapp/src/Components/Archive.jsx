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

export default class Archive extends React.Component {
    render() {
        return (
            <Container>
                <Title white>Draw Archive</Title>
                <ArchiveItem numbers={[5, 10, 20, 30]} />
            </Container>
        );
    }
}