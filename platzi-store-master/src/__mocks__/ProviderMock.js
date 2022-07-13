// this mock should include elements similar to index.js file
// here we will load all the structure that that file will probably have

import React from 'react';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import initialState from '../initialState';
import reducer from '../reducers';

const store = createStore(reducer, initialState);
const history = createBrowserHistory();

const ProviderMock = props => (
  <Provider store={store}>
    {/* Router simulates navigation between routes */}
    <Router history={history}>
      {/*we pass as children the components that we need to structure in this mock */}
      {props.children}
    </Router>
  </Provider>
);

export default ProviderMock;
