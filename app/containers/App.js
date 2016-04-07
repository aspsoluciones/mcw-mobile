'use strict';

import React, { Component, StyleSheet, Navigator, Text } from 'react-native';
import Login from '../components/Login';

export default class Application extends Component {
  constructor(props) {
    super(props);
  }
  configureScene(route) {
    return Navigator.SceneConfigs.FadeAndroid
  }
  renderScene(route, navigator) {
    let Component = route.component;
    return (
      <Component navigator={navigator} route={route} ></Component>
    )
  }
  render() {
    return (
      <Navigator initialRoute={{
        component: Login,
        name: 'Login'
      }}
      ref='navigator'
      configureScene={this.configureScene}
      renderScene={this.renderScene}
      />
    )
  }

}
