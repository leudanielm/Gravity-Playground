
//Change the selected scenario

const SET_SCENARIO = 'SET_SCENARIO';

export function setScenario( scenario ) {

  return { type: SET_SCENARIO, selectedScenario: scenario };

};

//Add a mass to the selected scenario

const ADD_MASS_TO_SCENARIO = 'ADD_MASS_TO_SCENARIO';

export function addMassToScenario( mass ) {

  return { type: ADD_MASS_TO_SCENARIO, mass: mass };

};

export function addMass( e ) {

  return function ( dispatch ) {

    e.preventDefault();

    //Get the form data, extract it and put it into an object literal

    const form = new FormData( e.target );

    const values = form.values();
    const keys = form.keys();

    const mass = {
      type: 'custom',
      radius: 1
    };

    let key;

    while ( ( key = keys.next() ).done === false ) {

      const value = values.next().value;

      mass[ key.value ] = isNaN( value ) === false ? parseFloat( value ) : value;

    }

    //Reset the form

    e.target.reset();

    dispatch( addMassToScenario( mass ) );

  };

}

//Open and close the modify scenario interface

const OPEN_MODIFY_SCENARIO = 'OPEN_MODIFY_SCENARIO';

export function openModifyScenario() {

  return { type: OPEN_MODIFY_SCENARIO };

};

const CLOSE_MODIFY_SCENARIO = 'CLOSE_MODIFY_SCENARIO';

export function closeModifyScenario() {

  return { type: CLOSE_MODIFY_SCENARIO };

};