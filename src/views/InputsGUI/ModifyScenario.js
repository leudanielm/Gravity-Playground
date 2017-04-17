import React from 'react';
import MassMap from './MassMap';
import Select from '../widgets/Select';
import Slider from '../widgets/Slider';
import masses from '../../data/masses';
import colors from '../../data/colors';
import '../../css/ModifyScenario.css';

const ModifyScenario = ( props ) => <div className="modifyScenarioWrapper">

				      <div className="easeIn">

                                      <MassMap masses={ props.scenario.masses } 
                                               timeStep={ props.scenario.dt } 
                                               scale={ props.scenario.scale } />

                                      <div className="addMassWrapper">

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

                                      <h1 className="scenarioTitle">{ props.scenario.name }</h1>

                                      <span onClick={ props.closeModifyScenario } 
                                            className="close">
                                        X
                                      </span>

                                    </div>

                                    <div className="deleteMassWrapper">

				      <h2>Delete Mass</h2>

                                      <Select data={ props.scenario.masses } valueKey='name' labelKey='name' cssClass='input' callback={ props.setMassToBeDeleted } />
                                      <button onClick={ props.deleteMassFromScenario } className="input">Delete Mass</button>

                                    </div>

                                  </div>

                                  </div>;

export default ModifyScenario;
