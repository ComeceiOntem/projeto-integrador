import React from "react";
import ProTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import store from "../store";

const GuestRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props => (!store.getState().auth.signedIn ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{pathname: '/', state: { from: props.location}}}/>
        ))
        }
    />
)

GuestRoute.prototype = {
    component: ProTypes.func.isRequired
}

export default GuestRoute
