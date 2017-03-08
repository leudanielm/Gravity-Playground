const initialState = {
  running: false
};

export default function ( state = initialState, action ) {

  switch ( action.type ) {

    case 'setSimulation':

      return Object.assign( {}, state, { running: action.running } );

    default:

      return state;

  }

};