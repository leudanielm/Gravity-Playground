import scenarios from '../data/scenarios';

const initialState = {
  data: scenarios,
  scenarios: Object.keys( scenarios ),
  scenario: scenarios[ 'The Earth and Moon System' ],
  modifyScenario: false
};

export default function( state = initialState, action ) {

  switch ( action.type ) {

    case 'setScenario':

      return Object.assign( {}, state, {
        scenario: state.data[ action.selectedScenario ]
      });

    case 'openModifyScenario':

      return Object.assign( {}, state, {
        modifyScenario: true
      } );

    case 'closeModifyScenario':

      return Object.assign( {}, state, {
        modifyScenario: false
      } );

    case 'addMassToScenario':

      let newScenario = state.scenario;
      newScenario.masses = state.scenario.masses.push( action.mass );

      return Object.assign( {}, state, {
        scenario: newScenario
      } );

    default:

      return state;

  }

};