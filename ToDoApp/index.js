/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import Home from './containers/home/Home';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Home);
