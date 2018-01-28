import s from 'styled-components';

const Input = s.input`
    border-radius: 4px;
    background-color: #383A42;
    border: solid 1px #585960;
    height: 40px;
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
    width: 440px;
    letter-spacing: 0.6px;
    font-weight: 300;
    padding: 0 60px 0 22px;
    ::placeholder {
        color: #fff;
    }
    :focus {
        outline: none;
    }
`;


export default Input;
