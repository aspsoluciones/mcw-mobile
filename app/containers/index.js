import React from 'react-native';

import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Application from './App'
import * as reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        {
          () => <Application/>
        }
      </Provider>
    );
  }
}
