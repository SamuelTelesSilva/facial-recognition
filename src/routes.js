import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import FaceApi from './Pages/FaceApi';
import Home from './Pages/Home';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/faceapi" component={FaceApi} />
        </Switch>
    </BrowserRouter>
);
export default Routes;
