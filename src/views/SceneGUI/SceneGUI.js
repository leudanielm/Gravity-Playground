import React from 'react';
import Tooltip from '../widgets/Tooltip';
import Select from '../widgets/Select';
import scene from '../../3d/scene';
import '../../css/SceneWrapper.css';

class SceneGUI extends React.Component {

  static propTypes = {

    scenario: React.PropTypes.object.isRequired,
    reset: React.PropTypes.func.isRequired

  }

  componentDidMount() {

    scene.init( this.props.scenario, this._webGlCanvas, this._massCanvas, this._pathCanvas );

  }

  componentWillUnmount() {

    scene.reset();

  }

  render() {

    return (

      <div className="easeIn">

      <div>

        <canvas ref={ (el) => this._pathCanvas = el } className={ this.props.scene.orbits === false && 'hide' }></canvas>

        <canvas ref={ (el) => this._massCanvas = el } className={ this.props.scene.orbits === false && 'hide' }></canvas>

        <canvas ref={ (el) => this._webGlCanvas = el } className={ this.props.scene.orbits === true && 'hide' }></canvas>

      </div>

      { this.props.scene.orbits === false &&

      <div className="cameraControls">

        <label className="cameraLabel">Camera Position<Tooltip content="Select the position of the camera. If you set it to free, you can use your mouse or fingers to pan, zoom and orbit around an object." /></label>
        <Select callback={ this.props.setCameraPosition } cssClass='input camList' data={ this.props.scenario.masses } valueKey='name' labelKey='name' />

        <label className="cameraLabel">Camera Focus<Tooltip content="Select the object that the camera is focused on."/></label>
        <Select callback={ this.props.setCameraFocus } cssClass='input camList' data={ this.props.scenario.masses } valueKey='name' labelKey='name' />

      </div>

      }

      { this.props.scene.orbits === false && <button className="input viewOrbitsButton" onClick={ this.props.showOrbits }>View Orbits</button> }

      { this.props.scene.orbits === true && <button className="input view3DButton" onClick={ this.props.hideOrbits }>View 3D</button> }

      <button onClick={ this.props.resetSimulation } className="input resetButton">Reset</button>

    </div>

    );

  }

}

export default SceneGUI;