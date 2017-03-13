import React from 'react';
import ScenarioInfo from './ScenarioInfo';

class MainMenu extends React.Component {

  render() {

    return (

      <div className="inputs easeIn">

        <h1 className="pageTitle">Gravity Playground</h1>

        <label>Select a scenario</label>
        <select onChange={ this.props.setScenario } className="input scenariosList">
          { this.props.scenarios.map( (scenario) => <option value={ scenario }> { scenario } </option> ) }
        </select>

        <ScenarioInfo scenario={ this.props.scenario } /> 

        <button onClick={ this.props.openModifyScenario } className="input modifyScenarioButton">Modify Scenario</button>

        <button onClick={ this.props.startSimulation } className="input startButton">Start Simulation</button>

      </div>

    );

  }

} 

export default MainMenu;