/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';
import Home from './src/pages/Home';

export default class mobile extends Component {
  renderScene(route, navigator) {
    return <route.component navigator={navigator} {...route.passProps} />
  }
  render() {
    return (
      <Navigator
        initialRoute={{component: Home}}
        renderScene={this.renderScene}
      />
    );
  }
}

AppRegistry.registerComponent('mobile', () => mobile);
