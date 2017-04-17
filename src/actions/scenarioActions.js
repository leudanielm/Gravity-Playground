import masses from '../data/masses';

//Change the selected scenario

const SET_SCENARIO = 'SET_SCENARIO';

export function setScenario( scenario ) {

  return { type: SET_SCENARIO, selectedScenario: scenario };

};

const SET_SCENARIO_LAW = 'SET_SCENARIO_LAW';

export function setScenarioLaw( law ) {

  return { type: SET_SCENARIO_LAW, law: law };

}

const SET_SCENARIO_G = 'SET_SCENARIO_G';

export function setScenarioG( g ) {

  return { type: SET_SCENARIO_G, g: g };

}

//Set the mass to be deleted 

const SET_MASS_TO_BE_DELETED = 'SET_MASS_TO_BE_DELETED';

export function setMassToBeDeleted( mass ) {

  return { type: SET_MASS_TO_BE_DELETED, massToBeDeleted: mass };

}

//Delete a mass from the selected scenario

const DELTE_MASS_FROM_SCENARIO = 'DELETE_MASS_FROM_SCENARIO';

export function deleteMass() {

  return { type: DELTE_MASS_FROM_SCENARIO };

};

//Add a mass to the selected scenario

const ADD_MASS_TO_SCENARIO = 'ADD_MASS_TO_SCENARIO';

function addMassToScenario( mass ) {

  return { type: ADD_MASS_TO_SCENARIO, mass: mass };

};

export function addMass( e ) {

  return function ( dispatch ) {

    e.preventDefault();

    //Get the form data, extract it and put it into an object literal

    const form = new FormData( e.target );

    const massName = form.get( 'm' );

    let fixedMassData = masses.filter( ( mass ) => massName === mass.name );

    const mass = {
      type: 'custom',
      name: form.get( 'name' ),
      textureName: massName,
      m: fixedMassData[0].m,
      color: form.get( 'color' ),
      x: parseFloat( form.get( 'x' ) ),
      y: parseFloat( form.get( 'y' ) ),
      z: parseFloat( form.get( 'z' ) ),
      vx: parseFloat( form.get( 'vx' ) ),
      vy: parseFloat( form.get( 'vy' ) ),
      vz: parseFloat( form.get( 'vz' ) ),
      radius: fixedMassData[0].radius
    };

    //Reset the form

    e.target.reset();

    dispatch( addMassToScenario( mass ) );

  };

};

export function resetScenarioSettings() {

  return function ( dispatch ) {

    dispatch( setScenario( 'The Inner Solar System' ) );
    dispatch( setScenarioG( 39.5 ) );
    dispatch( setScenarioLaw( 1.5 ) );

  };

}