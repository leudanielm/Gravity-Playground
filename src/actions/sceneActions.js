
const SET_SIMULATION = 'SET_SIMULATION';

export function setSimulation( running ) {

  return { type: SET_SIMULATION, running: running };

};

const SET_ORBITS = 'SET_ORBITS';

export function setOrbits( orbits ) {

  return { type: SET_ORBITS, orbits: orbits };

};

const SET_CAMERA_POSITION = 'SET_CAMERA_POSITION';

export function setCameraPosition( cameraPosition ) {

  return { type: SET_CAMERA_POSITION, cameraPosition: cameraPosition };

};

const SET_CAMERA_FOCUS = 'SET_CAMERA_FOCUS';

export function setCameraFocus( cameraFocus ) {

  return { type: SET_CAMERA_FOCUS, cameraFocus: cameraFocus };

};