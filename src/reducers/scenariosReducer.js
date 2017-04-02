import scenarios from '../data/scenarios';

const initialState = {
  data: scenarios,
  scenarios: Object.keys( scenarios ),
  scenario: scenarios[ 'The Inner Solar System' ],
  modifyScenario: false
};

export default function( state = initialState, action ) {

  switch ( action.type ) {

    case 'SET_SCENARIO':

      return Object.assign( {}, state, { scenario: JSON.parse( JSON.stringify( state.data[ action.selectedScenario ] ) ) } );

    case 'SET_SCENARIO_LAW':

      state.scenario.law = action.law;

      return Object.assign( {}, state, { scenario: state.scenario } );

    case 'SET_SCENARIO_G':

      state.scenario.g = action.g;

      return Object.assign( {}, state, { scenario: state.scenario } );

    case 'OPEN_MODIFY_SCENARIO':

      return Object.assign( {}, state, { modifyScenario: true } );

    case 'CLOSE_MODIFY_SCENARIO':

      return Object.assign( {}, state, { modifyScenario: false } );

    case 'ADD_MASS_TO_SCENARIO':

      let newScenario = state.scenario;
      newScenario.masses = newScenario.masses.push( action.mass );

      return Object.assign( {}, state, { scenario: newScenario } );

    default:

      return state;

  }

};