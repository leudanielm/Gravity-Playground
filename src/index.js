import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './store';
import './css/main.css';
import masses from './data/masses';
import colors from './data/colors';
import SimulatorContainer from './containers/SimulatorContainer';

ReactDOM.render(
  <Provider store={ store }>
    <SimulatorContainer colors={ colors } masses={ masses } />
  </Provider>,
  document.getElementById( 'root' )
);
