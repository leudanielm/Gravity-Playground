
const initialState = {
  disableWelcome: JSON.parse( localStorage.getItem( "welcomeMessageDisabled" ) ),
  modifyScenario: false,
  closeWelcome: false
};

export default function ( state = initialState, action ) {

  switch ( action.type ) {

    case 'DISABLE_WELCOME':

      return Object.assign( {}, state, { disableWelcome: action.disableWelcome } );

    case 'CLOSE_WELCOME':

      return Object.assign( {}, state, { closeWelcome: true } );

    case 'OPEN_MODIFY_SCENARIO':

      return Object.assign( {}, state, { modifyScenario: true } );

    case 'CLOSE_MODIFY_SCENARIO':

      return Object.assign( {}, state, { modifyScenario: false } );

    default:

      return state;

  }

};