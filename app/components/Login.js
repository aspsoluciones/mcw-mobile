'use strict';

import React, { Component, StyleSheet, Text, View } from 'react-native';
var t = require('tcomb-form-native');
import { connect } from 'react-redux'
var Form = t.form.Form;
import { loginUser } from '../actions/AuthActions';
var Credentials = t.struct({
  username: t.String,
  password: t.String,
  domain: t.String,
  rememberMe: t.Boolean
});


var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  }
});

var options = {
  fields: {
    username: {
      label:'Usuario'
    },
   password: {
     label:'Contraseña'
    },
    domain: {
      label: 'Dominio'
    }
  }
};

var _LoginStyle = StyleSheet.create({
  container : {
    flex: 1
  },

  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15
  },
});

class Login extends Component {

  sendCredentials() {
    loginUser()
  }

  render() {
    return (
      <View style={_LoginStyle.container}>
        <Form
          ref="loginForm"
          type={Credentials}
          options={options}
        />
      </View>
    );
  }
}

var mapStateToProps = function(state) {
  return {
    state
  }
};

export default connect(mapStateToProps)(Login);

