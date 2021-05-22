import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Auth from './components/auth/auth';


const App = () => {


    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/auth' exact>
                    <Auth />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;