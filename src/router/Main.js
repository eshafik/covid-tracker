import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Global from "../pages/Global";
import Bangladesh from "../pages/Bangladesh";
import About from '../pages/About';

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Bangladesh}></Route>
            <Route exact path='/global' component={Global}></Route>
            <Route exact path='/about' component={About}></Route>
        </Switch>
    );
}

export default Main;