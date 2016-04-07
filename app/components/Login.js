'use strict';

import React, { Component, StyleSheet, Text, View } from 'react-native';
var t = require('tcomb-form-native/lib');
var i18n = require('tcomb-form-native/lib/i18n/en');
var Form = t.form.Form;
import stylesheet from '../styles/materialdesign';
import bootstrap from '../templates/bootstrap';

Form.i18n = i18n;
Form.templates = bootstrap;
Form.stylesheet = stylesheet;

var Credentials = t.struct({
  username: t.String,
  password: t.String,
  domain: t.String
})

var options = {};

export default class Login extends Component {
  render() {

    return (
      <View>
        <Form
          ref="form"
          type={Credentials}
          options={options}
        />
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
