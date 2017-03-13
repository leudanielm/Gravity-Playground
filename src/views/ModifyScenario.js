import React from 'react';
import MassMap from './MassMap';
import Slider from './Slider';
import '../css/ModifyScenario.css';

class ModifyScenario extends React.Component {

  render() {

    return (

    <div className="modifyScenarioWrapper">

      <MassMap masses={ this.props.scenario.masses } timeStep={ this.props.scenario.dt } scale={ this.props.scenario.scale } />

      <div className="addMassWrapper">

        <form className="addMassForm" onSubmit={ this.props.addMassToScenario }>

          <table className="addMassTable">

            <tr>
              <th>Name</th>
              <th>Mass</th>
              <th>Color</th>
            </tr>
            <tr>
              <td><input required={ true } name="name" className="input" /></td>
              <td><select name="m" className="input">{ this.props.masses.map( (mass) => <option value={ mass.m }>{ mass.name }</option> ) }</select></td>
              <td><select name="color" className="input">{ this.props.colors.map( (color) => <option value={ color }>{ color }</option> ) }</select></td>
            </tr>

            <tr>
              <td><Slider label="X Position" name="x" max={ this.props.scenario.distMax } min={ this.props.scenario.distMin } step={ this.props.scenario.distStep } /></td>
              <td><Slider label="Y Position" name="y" max={ this.props.scenario.distMax } min={ this.props.scenario.distMin } step={ this.props.scenario.distStep } /></td>
              <td><Slider label="Z Position" name="z" max={ this.props.scenario.distMax } min={ this.props.scenario.distMin } step={ this.props.scenario.distStep } /></td>
            </tr>

            <tr>
              <td><Slider label="X Velocity" name="vx" max={ this.props.scenario.velMax } min={ this.props.scenario.velMin } step={ this.props.scenario.velStep } /></td>
              <td><Slider label="Y Velocity" name="vy" max={ this.props.scenario.velMax } min={ this.props.scenario.velMin } step={ this.props.scenario.velStep } /></td>
              <td><Slider label="Z Velocity" name="vz" max={ this.props.scenario.velMax } min={ this.props.scenario.velMin } step={ this.props.scenario.velStep } /></td>
            </tr>

          </table>

          <input type="submit" value="Add Mass" className="input addMassButton" />

        </form>

      </div>

      <div className="modifyScenarioHeader">

        <img src={ this.props.scenario.image } className="smallScenarioImg" />

        <h1 className="scenarioTitle">{ this.props.scenario.name }</h1>

        <span onClick={ this.props.closeModifyScenario } className="close">X</span>

      </div>

    </div>

    );
  }

}

export default ModifyScenario;
