import React from 'react';
import { connect } from 'react-redux';
import * as scenarioActions from '../actions/scenarioActions';
import * as sceneActions from '../actions/sceneActions';
import SimulationInputs from '../views/SimulationInputs';
import SceneWrapper from '../views/SceneWrapper';

class SimulatorContainer extends React.Component {

  render() {

    return (

    <div className="pageWrapper">

      { this.props.scene.running === false ? 

        <SimulationInputs setScenario={ this.props.setScenario } 
                          scenario={ this.props.scenarios.scenario } 
                          scenarios={ this.props.scenarios.scenarios } 
                          masses={ this.props.masses } 
                          colors={ this.props.colors } 
			  modifyScenario={ this.props.scenarios.modifyScenario }
                          openModifyScenario={ this.props.openModifyScenario }
                          closeModifyScenario={ this.props.closeModifyScenario }
                          addMassToScenario={ this.props.addMassToScenario }
                          startSimulation={ this.props.startSimulation } /> 

        :
      
        <SceneWrapper scenario={ this.props.scenarios.scenario } 
                      resetSimulation={ this.props.resetSimulation } /> }

    </div>

    );
  }

}

const mapStateToProps = ( state ) => ( {
  scenarios: state.scenarioState,
  scene: state.sceneState
} );

const mapDispatchToProps = ( dispatch, ownProps ) => ( {

  setScenario: ( e ) => {

    dispatch( scenarioActions.setScenario( e.target.value ) );

  },

  openModifyScenario: () => {

    dispatch( scenarioActions.openModifyScenario() );

  },

  closeModifyScenario: () => {

    dispatch( scenarioActions.closeModifyScenario() );

  },

  startSimulation: () => {

    dispatch( sceneActions.setSimulation( true ) );

  },

  resetSimulation: () => {

    dispatch( sceneActions.setSimulation( false ) );

  },

  addMassToScenario: ( e ) => {

    dispatch( scenarioActions.addMass( e ) );

  }

} );

export default connect( mapStateToProps, mapDispatchToProps )( SimulatorContainer );
