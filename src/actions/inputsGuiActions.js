//Open and close the modify scenario interface

const OPEN_MODIFY_SCENARIO = 'OPEN_MODIFY_SCENARIO';

export function openModifyScenario() {

  return { type: OPEN_MODIFY_SCENARIO };

};

const CLOSE_MODIFY_SCENARIO = 'CLOSE_MODIFY_SCENARIO';

export function closeModifyScenario() {

  return { type: CLOSE_MODIFY_SCENARIO };

};