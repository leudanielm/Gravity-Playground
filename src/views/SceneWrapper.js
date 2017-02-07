import React from 'react';
import scene from '../3d/scene';
import '../css/SceneWrapper.css';

class SceneWrapper extends React.Component {

  static propTypes = {

    scenario: React.PropTypes.object.isRequired,
    reset: React.PropTypes.func.isRequired

  }

  componentDidMount() {

    scene.init( this.props.scenario, this._webGL, this._camPos, this._camFocus, this._viewOrbits, this._view3D );

  }

  componentWillUnmount() {

    scene.reset();

  }

  render() {

    return (

    <div className="easeIn">

      <div ref={ (el) => this._webGL = el }></div>

      <div className="cameraControls">

        <label className="cameraLabel">Camera Position</label>
        <select ref={ (el) => this._camPos = el } className="input camList"><option value="free">Free (Pan, zoom and orbit)</option>{ this.props.scenario.masses.map( (mass) => <option value={ mass.name }> { mass.name } </option> ) }</select>

        <label className="cameraLabel">Camera Focus</label>
        <select ref={ (el) => this._camFocus = el } className="input camList">{ this.props.scenario.masses.map( (mass) => <option value={ mass.name }> { mass.name } </option> ) }</select>

      </div>

      <button ref={ (el) => this._viewOrbits = el } className="input viewOrbitsButton">View Orbits</button>
      <button ref={ (el) => this._view3D = el } className="input view3DButton">View 3D</button>

      <button onClick={ this.props.reset } className="input resetButton">Reset</button>

    </div>

    );

  }

}

export default SceneWrapper;
