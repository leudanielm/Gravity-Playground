const initialState = {
  running: false,
  orbits: false,
  cameraPosition: null,
  cameraFocus: null,
};

export default function ( state = initialState, action ) {

  switch ( action.type ) {

    case 'SET_SIMULATION':

      return Object.assign( {}, state, { running: action.running } );

    case 'SET_ORBITS':

      return Object.assign( {}, state, { orbits: action.orbits } );

    case 'SET_CAMERA_POSITION':

      return Object.assign( {}, state, { cameraPosition: action.cameraPosition } );

    case 'SET_CAMERA_FOCUS':

      return Object.assign( {}, state, { cameraFocus: action.cameraFocus } );

    default:

      return state;

  }

};