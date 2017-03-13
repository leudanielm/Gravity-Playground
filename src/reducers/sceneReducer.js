const initialState = {
  running: false
};

export default function ( state = initialState, action ) {

  switch ( action.type ) {

    case 'SET_SIMULATION':

      return Object.assign( {}, state, { running: action.running } );

    default:

      return state;

  }

};