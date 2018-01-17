import React from 'react';
import { Provider } from 'mobx-react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../Components';
import stores from '../Stores';

const App = () => (
    <Provider {...stores}>
        <Router>
            <Switch>
                <Route path="/test" render={() => <p>test</p>} />
                <Route path="/" component={Header} />
            </Switch>
        </Router>
    </Provider>
);

export default App;
