import React from 'react';
import s from 'styled-components';

const Container = s.button`
  height: 60px;
  border-radius: 30px;
  background-color: #8941ff;
  border: none;
  font-size: 24px;
  color: #fff;
  font-weight: 300;
  padding: 0 60px;
  cursor: pointer;
  @media (max-width: 500px) {
    font-size: 18px;
    padding: 0 20px;
    width: 100%;
  }
`;

const Button = ({ title }) => (
    <Container>{title}</Container>
);

export default Button;
