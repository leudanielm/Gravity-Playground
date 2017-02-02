import React from 'react';

const ScenarioInfo = ( props ) => <div className="scenarioInfo">
                                    <img src={ props.scenario.image } className="scenarioInfoImg" />
				    <p className="scenarioInfoText">{ props.scenario.info }</p>
				  </div>;

ScenarioInfo.propTypes = {
  scenario: React.PropTypes.object.isRequired
};

export default ScenarioInfo;