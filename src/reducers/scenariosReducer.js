import scenarios from '../data/scenarios';

const initialState = {
  data: scenarios,
  scenarios: Object.keys( scenarios ),
  scenario: scenarios[ 'The Earth and Moon System' ],
  modifyScenario: false
};

export default function( state = initialState, action ) {

  switch ( action.type ) {

    case 'SET_SCENARIO':

      return Object.assign( {}, state, { scenario: state.data[ action.selectedScenario ] } );

    case 'OPEN_MODIFY_SCENARIO':

      return Object.assign( {}, state, { modifyScenario: true } );

    case 'CLOSE_MODIFY_SCENARIO':

      return Object.assign( {}, state, { modifyScenario: false } );

    case 'ADD_MASS_TO_SCENARIO':

      let newScenario = state.scenario;
      newScenario.masses = state.scenario.masses.push( action.mass );

      return Object.assign( {}, state, { scenario: newScenario } );

    default:

      return state;

  }

};