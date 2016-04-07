'use strict';

import React, { Component, StyleSheet, Navigator, Text, View } from 'react-native';
import Login from '../components/Login';
var NavBar =  require('../components/NavBar');
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from '../store/configureStore';
const store = configureStore();


let ICON_SIZE = 24;

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    navigator: {
        paddingTop: 64
    },
    icon: {
        width: ICON_SIZE,
        height: ICON_SIZE,
        resizeMode: 'contain'
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
        <Provider store={store}>
            <View style={styles.container}>
                <Navigator
                    styles={[styles.container, styles.navigator]}
                    initialRoute={{
                    component: Login,
                    name: 'Login'
                }}
                    navigationBar={ NavBar }
                    ref='navigator'
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}
                />
            </View>
        </Provider>


    )
  }

}
