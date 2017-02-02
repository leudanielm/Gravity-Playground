import React from 'react';
import ScenarioInfo from './ScenarioInfo';
import ModifyScenario from './ModifyScenario';

class SimulationInputs extends React.Component {

  render() {

    return (

    <div className="inputsWrapper">

      <div className="inputs">

        <h1 className="pageTitle">Gravity Playground</h1>

        <label>Select a scenario</label>
        <select onChange={ this.props.updateScenario } className="scenariosList">{ this.props.scenarios.map( (scenario) => <option value={ scenario }> { scenario } </option> ) }</select>

        <ScenarioInfo scenario={ this.props.scenario } />

        <button onClick={ this.props.showModifyScenario } className="button">Modify Scenario</button>

        <button onClick={ this.props.start } className="button">Start Simulation</button>

      </div>

      { this.props.modifyScenario !== false && <ModifyScenario scenario={ this.props.scenario } addBody={ this.props.addBody } masses={ this.props.masses } colors={ this.props.colors } hideModifyScenario={ this.props.hideModifyScenario } /> }

    </div>

    );

  }

}

SimulationInputs.propTypes = {
  scenario: React.PropTypes.object.isRequired,
  addBody: React.PropTypes.func.isRequired,
  masses: React.PropTypes.array.isRequired,
  colors: React.PropTypes.array.isRequired,
  updateScenario: React.PropTypes.func.isRequired,
  showModifyScenario: React.PropTypes.func.isRequired,
  hideModifyScenario: React.PropTypes.func.isRequired,
  start: React.PropTypes.func.isRequired
};

export default SimulationInputs;
