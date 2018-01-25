/* eslint-disable no-unused-expressions */
import React from 'react';
import { render } from 'react-dom';
import 'web3';
import { injectGlobal } from 'styled-components';
import App from './Containers/App';

injectGlobal`
    html, body {
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        height: 100%;
    }
    
    * {
        box-sizing: border-box;
        line-height: 1;
    }
    
    #root {
        height: 100%;
    }
`;

render(
    <App />,
    document.getElementById('root')
);
