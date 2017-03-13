import React from 'react';
import MainMenu from './MainMenu';
import ModifyScenario from './ModifyScenario';
import '../css/SimulationInputs.css';

class SimulationInputs extends React.Component {

  render() {

    return (

    <div>

      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="trees"></div>

      <div className="inputsWrapper">

      <div className="inputsWrapper">

        <MainMenu setScenario={ this.props.setScenario } 
                  scenarios={ this.props.scenarios } 
                  scenario={ this.props.scenario } 
                  openModifyScenario={ this.props.openModifyScenario } 
                  startSimulation={ this.props.startSimulation } /> 

        { this.props.modifyScenario === true && <ModifyScenario scenario={ this.props.scenario } 
                                                                masses={ this.props.masses } 
                                                                colors={ this.props.colors } 
                                                                addMassToScenario={ this.props.addMassToScenaario }
                                                                closeModifyScenario={ this.props.closeModifyScenario } /> }

      </div>

      </div>

    </div>

    );

  }

}

export default SimulationInputs;
