/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import Home from './containers/home/Home';

type Props = {};

export class App extends Component<Props> {

  render() {
    return (
      <View>
        <Home />
      </View>
    );
  }
}
