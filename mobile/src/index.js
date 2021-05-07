// src/index.js.js

import Register from './pages/Registar';
import Login from './pages/Login';
import Home from './pages/Home';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const Routes = createAppContainer(
    createStackNavigator({
        Registrar: Register,
        Login: Login,
        Home: Home,
    })
);

export default Routes;