import { combineReducers } from 'redux';
import scenariosReducer from './scenariosReducer';
import sceneReducer from './sceneReducer';

export default combineReducers( {
  scenarioState: scenariosReducer,
  sceneState: sceneReducer
} );