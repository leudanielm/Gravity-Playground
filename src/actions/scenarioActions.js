
const setScenario = 'setScenario';

export function setScenario( scenario ) {

  return { type: setScenario, scenario };

};

const addMassToScenario = 'addMassToScenario';

export function addMassToScenario( mass ) {

  return { type: addMassToScenario, mass };

};

const openModifyScenario = 'openModifyScenario';

export function openModifyScenario() {

  return { type: openModifyScenario };

};

const closeModifyScenario = 'closeModifyScenario';

export function closeModifyScenario() {

  return { type: closeModifyScenario };

};