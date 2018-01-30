import React from 'react';
import s from 'styled-components';
import { Provider } from 'mobx-react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Test from './Test';
import Manual from './Manual';
import stores from '../Stores';
import { Header, Footer } from '../Components';
import MyTickets from './MyTickets';

const Container = s.div`
    background: linear-gradient(to bottom, #3da3f7, #9917ff);
    margin-top: 100px;
    min-height: 100%;
        @media (max-width: 700px) {
        margin-top: 60px;
    }
`;

const App = () => (
    <Provider {...stores}>
        <Container>
            <Router>
                <React.Fragment>
                    <Header />
                    <Switch>
                        <Route path="/test" component={Test} />
                        <Route path="/manual" component={Manual} />
                        <Route path="/tickets" component={MyTickets} />
                        <Route path="/" component={Home} />
                    </Switch>
                </React.Fragment>
            </Router>
            <Footer />
        </Container>
    </Provider>
);

export default App;
