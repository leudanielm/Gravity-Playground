import React from 'react';
import scene from '../3d/scene';

class SceneWrapper extends React.Component {

  componentDidMount() {

    scene.init( this.props.scenario, this._webGL, this._camPos, this._camFocus, this._viewOrbits, this._view3D );

  }

  componentWillUnmount() {

    scene.reset();

  }

  render() {

    return (

    <div>

      <div ref={ (el) => this._webGL = el }></div>

      <div className="cameraControls">

        <label className="simulationControl cameraPositionLabel">Camera Position</label>
        <select ref={ (el) => this._camPos = el } className="camPos">{ this.props.scenario.masses.map( (mass) => <option value={ mass.name }> { mass.name } </option> ) }</select>

        <label className="simulationControl cameraFocusLabel">Camera Focus</label>
        <select ref={ (el) => this._camFocus = el } className="camFocus">{ this.props.scenario.masses.map( (mass) => <option value={ mass.name }> { mass.name } </option> ) }</select>

      </div>

      <button ref={ (el) => this._viewOrbits = el } className="button viewOrbits">View Orbits</button>
      <button ref={ (el) => this._view3D = el } className="button view3D">View 3D</button>

      <button onClick={ this.props.reset } className="button reset">Reset</button>

    </div>

    );

  }

}

SceneWrapper.propTypes = {
  scenario: React.PropTypes.object.isRequired,
  reset: React.PropTypes.func.isRequired
};

export default SceneWrapper;
