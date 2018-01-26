import s from 'styled-components';

const Title = s.h1`
    font-size: 36px;
    color: ${props => props.white ? '#fff' : '#634285'};    
    font-weight: 300;
    margin-top: 72px;
    margin-bottom: 80px;
`;

export default Title;
