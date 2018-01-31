import s from 'styled-components';

const Title = s.h1`
    font-size: 36px;
    color: ${props => props.white ? '#fff' : '#634285'};    
    font-weight: 300;
    margin-top: 72px;
    margin-bottom: 80px;
    @media (max-width: 500px) {
        font-size: 24px;
        text-align: left;
         margin-top: 31px;
        margin-bottom: 39px;
        text-align: left;
        padding-left: 20px;
        width: 100%;
    }
`;

export default Title;
