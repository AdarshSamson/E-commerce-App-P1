/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Signin from './Project/Signin';
import Apps from './Project/Apps';
import Ap from './Redux/Ap';
import Splash from './Project/Splash';
import Intro from './Project/Intro';
import Login from './Project/Login';


AppRegistry.registerComponent(appName, () => Ap);
