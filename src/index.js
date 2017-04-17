import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './store';
import './css/main.css';
import AppContainer from './connected/AppContainer';

ReactDOM.render(
  <Provider store={ store }>
    <AppContainer />
  </Provider>,
  document.getElementById( 'root' )
);
