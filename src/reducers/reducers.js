import { combineReducers } from 'redux';
import scenariosReducer from './scenariosReducer';
import sceneReducer from './sceneReducer';
import inputsGuiReducer from './inputsGuiReducer';

export default combineReducers( {
  scenarioState: scenariosReducer,
  sceneState: sceneReducer,
  inputsGuiState: inputsGuiReducer
} );