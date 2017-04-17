import React from 'react';
import { connect } from 'react-redux';
import SceneGui from '../views/SceneGui/SceneGui';
import * as sceneActions from '../actions/sceneActions';

class SceneGuiContainer extends React.Component {

  render() {

    return (

        <SceneGui scenario={ this.props.scenarios.scenario } 
                  scene={ this.props.scene }
                  resetSimulation={ this.props.resetSimulation }
                  setCameraPosition={ this.props.setCameraPosition }
                  setCameraFocus={ this.props.setCameraFocus }
                  hideOrbits={ this.props.hideOrbits }
                  showOrbits={ this.props.showOrbits } /> 

    );

  }

}

const mapStateToProps = ( state ) => ( {
  scenarios: state.scenarioState,
  scene: state.sceneState
} );

const mapDispatchToProps = ( dispatch, ownProps ) => ( {

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

  }

} );

export default connect( mapStateToProps, mapDispatchToProps )( SceneGuiContainer );
