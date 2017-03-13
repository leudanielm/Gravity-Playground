
const SET_SIMULATION = 'SET_SIMULATION';

export function setSimulation( running ) {

  return { type: SET_SIMULATION, running: running };

};