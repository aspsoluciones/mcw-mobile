'use strict';

import React, { Component, StyleSheet, Navigator, Text } from 'react-native';
import Login from '../components/Login';
var NavBar =  require('../components/NavBar');

var styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: "center"
    },
    tabText: {
        color: "white",
        margin: 50,
    },
    wrapper: {
     flex: 1
    }
});

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
      <Component navigator={navigator} route={route} />
    )
  }
  render() {
    return (
      <Navigator style={styles.wrapper} initialRoute={{
        component: Login,
        name: 'Login'
      }}

     navigationBar={ NavBar }
      ref='navigator'
      configureScene={this.configureScene}
      renderScene={this.renderScene}
      />
    )
  }

}
