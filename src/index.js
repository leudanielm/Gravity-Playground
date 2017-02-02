import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import scenarios from './data/scenarios';
import masses from './data/masses';
import colors from './data/colors';
import SimulatorContainer from './containers/SimulatorContainer';

ReactDOM.render(
  <SimulatorContainer scenarios={ scenarios } masses={ masses } colors={ colors } />,
  document.getElementById( 'root' )
);
