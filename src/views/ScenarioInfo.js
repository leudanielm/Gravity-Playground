import React from 'react';
import '../css/ScenarioInfo.css';

class ScenarioInfo extends React.Component {

  static propTypes = {

    scenario: React.PropTypes.object.isRequired

  }

  render() {

    return (

    <div className="scenarioInfo">

      <img src={ this.props.scenario.image } className="scenarioInfoImg" />

      <p className="scenarioInfoText">{ this.props.scenario.info }</p>

    </div>

    );

  }

}

export default ScenarioInfo;