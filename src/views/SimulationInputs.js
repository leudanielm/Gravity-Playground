import React from 'react';
import ScenarioInfo from './ScenarioInfo';
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

    <div className="inputsWrapper">

      <div className="inputs">

        <h1 className="pageTitle">Gravity Playground</h1>

        <label>Select a scenario</label>
        <select onChange={ this.props.updateScenario } className="input scenariosList">{ this.props.scenarios.map( (scenario) => <option value={ scenario }> { scenario } </option> ) }</select>

        <ScenarioInfo scenario={ this.props.scenario } />

        <button onClick={ this.props.showModifyScenario } className="input modifyScenarioButton">Modify Scenario</button>

        <button onClick={ this.props.start } className="input startButton">Start Simulation</button>

      </div>

      { this.props.modifyScenario === true && <ModifyScenario scenario={ this.props.scenario } addBody={ this.props.addBody } masses={ this.props.masses } colors={ this.props.colors } hideModifyScenario={ this.props.hideModifyScenario } /> }

    </div>

    );

  }

}

export default SimulationInputs;
