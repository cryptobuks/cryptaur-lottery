import React from 'react';
import { Provider } from 'mobx-react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Test from './Test';
import stores from '../Stores';

const App = () => (
    <Provider {...stores}>
        <Router>
            <Switch>
                <Route path="/test" component={Test} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    </Provider>
);

export default App;
