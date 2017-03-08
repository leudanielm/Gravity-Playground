import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import SimulationInputs from '../views/SimulationInputs';
import SceneWrapper from '../views/SceneWrapper';

class SimulatorContainer extends React.Component {

  render() {

    return (

    <div className="pageWrapper">

      { this.props.scene.running === false ? <SimulationInputs updateScenario={ this.props.updateScenario } 
                                                         scenario={ this.props.scenarios.scenario } 
                                                         scenarios={ this.props.scenarios.scenarios } 
                                                         masses={ this.props.masses } 
                                                         colors={ this.props.colors } 
						         modifyScenario={ this.props.scenarios.modifyScenario }
                                                         showModifyScenario={ this.props.showModifyScenario }
                                                         hideModifyScenario={ this.props.hideModifyScenario }
                                                         addBody={ this.props.addBody }
                                                         start={ this.props.start } /> 

                                            : <SceneWrapper scenario={ this.props.scenarios.scenario } 
                                                            reset={ this.props.reset } /> }

    </div>

    );
  }

}

const mapStateToProps = ( state ) => ( {
  scenarios: state.scenarioState,
  scene: state.sceneState
} );

const mapDispatchToProps = ( dispatch, ownProps ) => ( {

  updateScenario: ( e ) => {

    dispatch( {
      type: 'setScenario',
      selectedScenario: e.target.value 
    } );

  },

  showModifyScenario: () => {

    dispatch( {
      type: 'openModifyScenario'
    } );

  },

  hideModifyScenario: () => {

    dispatch( {
      type: 'closeModifyScenario'
    } );

  },

  start: () => {

    dispatch( {
      type: 'setSimulation',
      running: true
    } );

  },

  reset: () => {

    dispatch( {
      type: 'setSimulation',
      running: false
    } );

  },

  addBody: ( e ) => {

    e.preventDefault();

    //Get the form data, extract it and put it into an object literal

    const form = new FormData( e.target );

    const values = form.values();
    const keys = form.keys();

    const body = {
      type: 'custom',
      radius: 1
    };

    let key;

    while ( ( key = keys.next() ).done === false ) {

      const value = values.next().value;

      body[ key.value ] = isNaN( value ) === false ? parseFloat( value ) : value;

    }

    //Reset the form

    e.target.reset();

    store.dispatch( {
      type: 'addMassToScenario',
      mass: body
    } );

  }

} );

export default connect( mapStateToProps, mapDispatchToProps )( SimulatorContainer );
