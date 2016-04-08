'use strict';

import React, { Component, StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
var t = require('tcomb-form-native');
import { connect } from 'react-redux'
var Form = t.form.Form;
import colors from '../styles/colors';
import { loginUser } from '../actions/AuthActions';
var Credentials = t.struct({
  username: t.String,
  password: t.String,
  domain: t.String
});

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
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
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.primary
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex : .1
  },

  inputs: {
    marginBottom: 10,
    flex: .25,
    backgroundColor: "#FFF"
  },

  button: {
    height: 36,
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
});

class Login extends Component {

  sendCredentials() {
    loginUser()
  }

  render() {
    return (
      <View style={_LoginStyle.container}>
        <View style={_LoginStyle.header}>
          <Image style={ { height: 250, width: 250}} resizeMode="contain" source={require('../assets/Logo.png')}/>
        </View>
        <View style={_LoginStyle.inputs}>
          <Form
                ref="loginForm"
                type={Credentials}
                options={options}
          />
        </View>
        <View>
          <TouchableHighlight style={_LoginStyle.button} onPress={this.onPress} underlayColor='#99d9f4'>
            <Text style={_LoginStyle.buttonText}>Save</Text>
          </TouchableHighlight>
        </View>
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

