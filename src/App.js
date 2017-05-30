import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from './config/firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

export default class App extends Component {
  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return(
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}
