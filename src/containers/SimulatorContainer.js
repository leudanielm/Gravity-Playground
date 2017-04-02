import React from 'react';
import { connect } from 'react-redux';
import * as scenarioActions from '../actions/scenarioActions';
import * as sceneActions from '../actions/sceneActions';
import store from '../store';
import InputsGUI from '../views/InputsGUI/InputsGUI';
import SceneGUI from '../views/SceneGUI/SceneGUI';

class SimulatorContainer extends React.Component {

  componentWillMount() {

    store.dispatch( scenarioActions.setScenario( 'The Inner Solar System' ) );

  }

  render() {

    return (

    <div className="pageWrapper">

      { this.props.scene.running === false ? 

        <InputsGUI setScenario={ this.props.setScenario } 
                          setScenarioLaw={ this.props.setScenarioLaw }
                          setScenarioG={ this.props.setScenarioG }
                          scenario={ this.props.scenarios.scenario } 
                          scenarios={ this.props.scenarios.scenarios } 
			  modifyScenario={ this.props.scenarios.modifyScenario }
                          openModifyScenario={ this.props.openModifyScenario }
                          closeModifyScenario={ this.props.closeModifyScenario }
                          addMassToScenario={ this.props.addMassToScenario }
                          startSimulation={ this.props.startSimulation } /> 

        :
      
        <SceneGUI scenario={ this.props.scenarios.scenario } 
                      scene={ this.props.scene }
                      resetSimulation={ this.props.resetSimulation }
                      setCameraPosition={ this.props.setCameraPosition }
                      setCameraFocus={ this.props.setCameraFocus }
                      hideOrbits={ this.props.hideOrbits }
                      showOrbits={ this.props.showOrbits } /> }

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

  setScenarioLaw: ( e ) => {

    dispatch( scenarioActions.setScenarioLaw( parseFloat( e.target.value ) ) );

  },

  setScenarioG: ( e ) => {

    dispatch( scenarioActions.setScenarioG( parseFloat( e.target.value ) ) );

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

  showOrbits: () => {

    dispatch( sceneActions.setOrbits( true ) );

  },

  hideOrbits: () => {

    dispatch( sceneActions.setOrbits( false ) );

  },

  setCameraPosition: ( e ) => {

    dispatch( sceneActions.setCameraPosition( e.target.value ) );

  },

  setCameraFocus: ( e ) => {

    dispatch( sceneActions.setCameraFocus( e.target.value ) );

  },

  addMassToScenario: ( e ) => {

    dispatch( scenarioActions.addMass( e ) );

  }

} );

export default connect( mapStateToProps, mapDispatchToProps )( SimulatorContainer );
