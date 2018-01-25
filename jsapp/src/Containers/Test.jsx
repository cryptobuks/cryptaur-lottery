import React from 'react';
import CryptaurAPI from '../API/Cryptaur';

export default class Test extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => CryptaurAPI.getName()}>Call get method</button>
                <button onClick={() => CryptaurAPI.setName()}>Call set method</button>
            </div>
        );
    }
}
