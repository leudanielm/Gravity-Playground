import React from 'react';
import { connect } from 'react-redux';
import SceneGuiContainer from './SceneGuiContainer';
import SceneInputsGuiContainer from './SceneInputsGuiContainer';

class AppContainer extends React.Component {

  render() {

    return (

    <div className="pageWrapper">

      { this.props.scene.running === false ? <SceneInputsGuiContainer /> : <SceneGuiContainer /> }

    </div>

    );

  }

}

const mapStateToProps = ( state ) => ( {
  scene: state.sceneState
} );

export default connect( mapStateToProps )( AppContainer );
