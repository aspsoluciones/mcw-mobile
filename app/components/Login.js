'use strict';

import React, { Component, StyleSheet, Text, View } from 'react-native';

export default class Login extends Component {
  render() {
    const { actions } = this.props;

    return (
      <View style={styles.container}>
        <Text>
          Finished login
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
});
