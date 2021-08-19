import React, {useContext} from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';

//Pages
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import Register from './components/Register/Register';
import Room from './components/Room/Room';

import {AuthContext} from './context/AuthContext';


const App = () => {

    const { user } = useContext(AuthContext);

    return(
        <Router>
            <Route path="/" exact>
                {user ? <Room /> : <Join />}
            </Route>

            {/* test case if the new registered one will replace the old one */}
            <Route path="/register">
                {user ? <Room /> : <Register />}
            </Route>

            <Route path="/chat">
                {user ? <Chat /> : <Join />}
            </Route>

        </Router>
    );
}

export default App;