/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import {AppNavigator} from './containers/home/Home';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
