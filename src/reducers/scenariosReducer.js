import scenarios from '../data/scenarios';

const initialState = {
  data: scenarios,
  scenarios: Object.keys( scenarios ),
  scenario: scenarios[ 'The Inner Solar System' ],
  massToBeDeleted: null
};

export default function( state = initialState, action ) {

  let newScenario = state.scenario;

  switch ( action.type ) {

    case 'SET_SCENARIO':

      return Object.assign( {}, state, { scenario: JSON.parse( JSON.stringify( state.data[ action.selectedScenario ] ) ) } );

    case 'SET_SCENARIO_LAW':

      state.scenario.law = action.law;

      return Object.assign( {}, state, { scenario: state.scenario } );

    case 'SET_SCENARIO_G':

      state.scenario.g = action.g;

      return Object.assign( {}, state, { scenario: state.scenario } );

    case 'SET_MASS_TO_BE_DELETED':

      return Object.assign( {}, state, { massToBeDeleted: action.massToBeDeleted } );

    case 'DELETE_MASS_FROM_SCENARIO':

      var bob = newScenario.masses.filter( ( mass ) => mass.name !== state.massToBeDeleted );

      newScenario.masses = bob;

      return Object.assign( {}, state, { scenario: newScenario } );

    case 'ADD_MASS_TO_SCENARIO':

      newScenario.masses.push( action.mass );

      return Object.assign( {}, state, { scenario: newScenario } );

    default:

      return state;

  }

};