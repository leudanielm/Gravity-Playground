import React from 'react';
import MassMap from './MassMap';
import Select from '../widgets/Select';
import Tooltip from '../widgets/Tooltip';
import Slider from '../widgets/Slider';
import masses from '../../data/masses';
import colors from '../../data/colors';
import '../../css/SimulationInputs.css';
import forceLaws from '../../data/forceLaws';
import gravitationalConstants from '../../data/gravitationalConstants';
import '../../css/ModifyScenario.css';

const ModifyScenario = ( props ) => <div className="modifyScenarioWrapper">

				      <div className="easeIn">

                                      <MassMap masses={ props.scenario.masses } 
                                               timeStep={ props.scenario.dt } 
                                               scale={ props.scenario.scale } />

                                      <div className="addMassWrapper">

				      <h3>Add Mass</h3>

                                      <form className="addMassForm" 
                                            onSubmit={ props.addMassToScenario }>

                                        <table className="addMassTable">

                                          <tr>
                                            <th>Name</th>
                                            <th>Mass</th>
                                            <th>Color</th>
                                          </tr>
                                          <tr>
                                            <td>
                                              <input required={ true } 
                                                     name="name" 
                                                     className="input" />
                                            </td>
                                            <td>
                                              <Select data={ masses } valueKey='name' labelKey='name' cssClass='input' name='m' />
                                            </td>
                                            <td>
                                              <Select data={ colors } cssClass='input' name='color' />
                                            </td>
                                          </tr>

                                          <tr>
                                            <td>
                                              <Slider label="X Position" 
                                                      name="x" 
                                                      max={ props.scenario.distMax } 
                                                      min={ props.scenario.distMin } 
                                                      step={ props.scenario.distStep } />
                                            </td>
                                            <td>
                                              <Slider label="Y Position" 
                                                      name="y" 
                                                      max={ props.scenario.distMax } 
                                                      min={ props.scenario.distMin } 
                                                      step={ props.scenario.distStep } />
                                            </td>
                                            <td>
                                              <Slider label="Z Position" 
                                                      name="z" max={ props.scenario.distMax } 
                                                      min={ props.scenario.distMin } 
                                                      step={ props.scenario.distStep } />
                                            </td>
                                          </tr>

                                          <tr>
                                            <td>
                                              <Slider label="X Velocity" 
                                                      name="vx" 
                                                      max={ props.scenario.velMax } 
                                                      min={ props.scenario.velMin } 
                                                      step={ props.scenario.velStep } />
                                            </td>
                                            <td>
	                                      <Slider label="Y Velocity" 
                                                      name="vy" 
                                                      max={ props.scenario.velMax } 
                                                      min={ props.scenario.velMin } 
                                                      step={ props.scenario.velStep } />
                                            </td>
                                            <td>
                                              <Slider label="Z Velocity" 
                                                      name="vz" 
                                                      max={ props.scenario.velMax } 
                                                      min={ props.scenario.velMin } 
                                                      step={ props.scenario.velStep } />
                                            </td>
                                          </tr>

                                        </table>

                                        <input type="submit" 
                                               value="Add Mass" 
                                               className="input addMassButton" />

                                      </form>

                                    </div>

                                    <div className="modifyScenarioHeader">

                                      <h3 className="scenarioLabel">Scenario</h3>
                                                   
                                      <Select callback={ props.setScenario } cssClass='input scenariosList' data={ props.scenarios } />

                                      <Tooltip content="Select the scenario you want to simulate." />

                                      <button onClick={ props.startSimulation } className="input startButton">Start Simulation</button>

				      <h3 className="logo">Gravity Playground</h3>

                                    </div>

                                    <div className="deleteMassWrapper">

				      <h3>Delete Mass</h3>

                                      <Select data={ props.scenario.masses } valueKey='name' labelKey='name' cssClass='input' callback={ props.setMassToBeDeleted } />
                                      <button onClick={ props.deleteMassFromScenario } className="input">Delete Mass</button>

                                    </div>

                                    <div className="setConstantsWrapper">

				      <h3>Set Constants</h3>
				 
                                      <label>Gravitational Constant</label>

                                      <Select callback={ props.setScenarioG } cssClass='input' data={ gravitationalConstants } valueKey='val' labelKey='name' />

                                      <label>Gravitational Force Law</label>

                                      <Select callback={ props.setScenarioLaw } cssClass='input' data={ forceLaws } valueKey='val' labelKey='name' />

                                    </div>

                                  </div>

                                  </div>;

export default ModifyScenario;
