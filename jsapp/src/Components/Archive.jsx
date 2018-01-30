import React from 'react';
import s from 'styled-components';
import { ExpandContainer } from './Common';
import ArchiveItem from './ArchiveItem';

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
            <ExpandContainer title="Draw Archive" bgColor="#251b36">
                <ArchiveItem numbers={[5, 10, 20, 30]} />
                <ArchiveItem numbers={[5, 10, 20, 30]} />
                <ArchiveItem numbers={[5, 10, 20, 30, 18, 15]} />
                <ShowMore>Show 10 more</ShowMore>
            </ExpandContainer>
        );
    }
}