import React from 'react';
import { connect } from 'react-redux';
import * as scenarioActions from '../actions/scenarioActions';
import * as inputsGuiActions from '../actions/inputsGuiActions';
import * as sceneActions from '../actions/sceneActions';
import store from '../store';
import InputsGUI from '../views/InputsGUI/InputsGUI';

class SceneInputsGuiContainer extends React.Component {

  componentWillMount() {

    store.dispatch( scenarioActions.setScenario( 'The Inner Solar System' ) );

  }

  render() {

    return (

        <InputsGUI setScenario={ this.props.setScenario } 
                          setScenarioLaw={ this.props.setScenarioLaw }
                          setScenarioG={ this.props.setScenarioG }
                          scenario={ this.props.scenarios.scenario } 
                          scenarios={ this.props.scenarios.scenarios } 
			  modifyScenario={ this.props.inputsGui.modifyScenario }
                          openModifyScenario={ this.props.openModifyScenario }
                          closeModifyScenario={ this.props.closeModifyScenario }
                          setMassToBeDeleted={ this.props.setMassToBeDeleted }
                          deleteMassFromScenario={ this.props.deleteMass }
                          addMassToScenario={ this.props.addMass }
                          startSimulation={ this.props.startSimulation } /> 

    );
  }

}

const mapStateToProps = ( state ) => ( {
  scenarios: state.scenarioState,
  scene: state.sceneState,
  inputsGui: state.inputsGuiState
} );

const mapDispatchToProps = ( dispatch ) => ( {

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

    dispatch( inputsGuiActions.openModifyScenario() );

  },

  closeModifyScenario: () => {

    dispatch( inputsGuiActions.closeModifyScenario() );

  },

  startSimulation: () => {

    dispatch( sceneActions.setSimulation( true ) );

  },

  setMassToBeDeleted: ( e ) => {

    dispatch( scenarioActions.setMassToBeDeleted( e.target.value ) );

  },

  deleteMass: () => {

    dispatch( scenarioActions.deleteMass() );

  },

  addMass: ( e ) => {

    e.preventDefault();

    dispatch( scenarioActions.addMass( e ) );

  }

} );

export default connect( mapStateToProps, mapDispatchToProps )( SceneInputsGuiContainer );


