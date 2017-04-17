import React from 'react';
import Select from '../widgets/Select';
import Tooltip from '../widgets/Tooltip';
import forceLaws from '../../data/forceLaws';
import gravitationalConstants from '../../data/gravitationalConstants';
import ModifyScenario from './ModifyScenario';
import '../../css/SimulationInputs.css';

const InputsGUI = ( props ) => <div>

                                        <div className="stars"></div>
                                        <div className="twinkling"></div>
                                        <div className="trees"></div>

                                        <div className="inputsWrapper"> 

                                          <table className="inputsTable">
                                            <thead>
                                              <tr>
                                                <th>Scenario<Tooltip content="Select the scenario you want to simulate." /></th>
                                                <th>Gravitational Force Law<Tooltip content="The law that describes how gravity behaves over distances." /></th>
                                                <th>Gravitational Constant<Tooltip content="According to Newton's law of universal gravitation, the attractive force between two point-like bodies is directly proportional to the product of their masses, and inversely proportional to the square of the distance, r, (inverse-square law) between them: The constant of proportionality, G, is the gravitational constant." /></th>
                                                <th></th>
                                                <th></th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td>
                                                  <Select callback={ props.setScenario } cssClass='input' data={ props.scenarios } />
                                                </td>
                                                <td>
                                                  <Select callback={ props.setScenarioLaw } cssClass='input' data={ forceLaws } valueKey='val' labelKey='name' />
                                                </td>
                                                <td>
                                                  <Select callback={ props.setScenarioG } cssClass='input' data={ gravitationalConstants } valueKey='val' labelKey='name' />
                                                </td>
                                                <td>
                                                  <button onClick={ props.openModifyScenario } className="input modifyScenarioButton">Manage Masses</button>
                                                </td>
                                                <td>
                                                  <button onClick={ props.startSimulation } className="input startButton">Start Simulation</button>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>

			                  <div className="titleWrapper">
                                            <h1 className="pageTitle">Gravity Playground</h1>
			                    <h2>Newtonian N-Body Gravity Simulator</h2>
                                          </div>

                                          { props.modifyScenario === true && 

                                             <ModifyScenario setMassToBeDeleted={ props.setMassToBeDeleted } deleteMassFromScenario={ props.deleteMassFromScenario } scenario={ props.scenario } addMassToScenario={ props.addMassToScenario } closeModifyScenario={ props.closeModifyScenario } /> }

                                        </div>

                                      </div>;

export default InputsGUI;
