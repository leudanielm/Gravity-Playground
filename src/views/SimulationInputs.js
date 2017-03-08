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

        <MainMenu updateScenario={ this.props.updateScenario } 
                                                         scenarios={ this.props.scenarios } 
                                                         scenario={ this.props.scenario } 
                                                         showModifyScenario={ this.props.showModifyScenario } 
                                                         start={ this.props.start } /> 

                                             { this.props.modifyScenario === true && <ModifyScenario scenario={ this.props.scenario } 
                                                               masses={ this.props.masses } 
                                                               colors={ this.props.colors } 
                                                               addBody={ this.props.addBody }
                                                               hideModifyScenario={ this.props.hideModifyScenario } /> }

      </div>

      </div>

    </div>

    );

  }

}

export default SimulationInputs;
