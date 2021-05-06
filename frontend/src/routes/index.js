import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch } from 'react-router-dom'

import history from "./history";

import PrivateRoute from "./private";
import GuestRoute from './guest'

import Game from "../Pages/Game"
import Main from "../Pages/Main";
import SignUp from "../Pages/Auth/SignUp";
import SignIn from "../Pages/Auth/SignIn";

const Routes = () => (
    <ConnectedRouter history={history}>
        <Switch>
            <GuestRoute path="/signin" component={SignIn} />
            <GuestRoute path="/signup" component={SignUp} />
            <PrivateRoute exact path="/" component={Main} />
            <PrivateRoute path="/game" component={Game} />
        </Switch>
    </ConnectedRouter>
)

export default Routes
