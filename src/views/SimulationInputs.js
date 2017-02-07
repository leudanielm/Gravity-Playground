import React from 'react';
import MainMenu from './MainMenu';
import ModifyScenario from './ModifyScenario';
import '../css/SimulationInputs.css';

class SimulationInputs extends React.Component {

  static propTypes = {

    scenario: React.PropTypes.object.isRequired,
    addBody: React.PropTypes.func.isRequired,
    masses: React.PropTypes.array.isRequired,
    colors: React.PropTypes.array.isRequired,
    updateScenario: React.PropTypes.func.isRequired,
    showModifyScenario: React.PropTypes.func.isRequired,
    hideModifyScenario: React.PropTypes.func.isRequired,
    start: React.PropTypes.func.isRequired

  }

  render() {

    return (

    <div>

      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="trees"></div>

      <div className="inputsWrapper">

       { this.props.modifyScenario === false ? <MainMenu updateScenario={ this.props.updateScenario } scenarios={ this.props.scenarios } scenario={ this.props.scenario } showModifyScenario={ this.props.showModifyScenario } start={ this.props.start } /> : <ModifyScenario scenario={ this.props.scenario } addBody={ this.props.addBody } masses={ this.props.masses } colors={ this.props.colors } hideModifyScenario={ this.props.hideModifyScenario } /> }

      </div>

    </div>

    );

  }

}

export default SimulationInputs;
