
const setScenario = 'setScenario';

export function updateScenario( scenario ) {

  return { type: setScenario, selectedScenario: scenario };

};

const addMassToScenario = 'addMassToScenario';

export function addBody( mass ) {

  return { type: addMassToScenario, mass: mass };

};

const openModifyScenario = 'openModifyScenario';

export function showModifyScenario() {

  return { type: openModifyScenario };

};

const closeModifyScenario = 'closeModifyScenario';

export function hideModifyScenario() {

  return { type: closeModifyScenario };

};