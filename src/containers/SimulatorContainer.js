import React from 'react';
import SimulationInputs from '../views/SimulationInputs';
import SceneWrapper from '../views/SceneWrapper';

class SimulatorContainer extends React.Component {

  constructor( props ) {

    super( props );

    this.state = {
      running: false,
      scenarios: Object.keys( this.props.scenarios ),
      scenario: this.props.scenarios[ 'The Earth and Moon System' ],
      modifyScenario: false
    };

  }

  updateScenario = ( e ) => {

    this.setState( {
      scenario: this.props.scenarios[ e.target.value ]
    } );

  }

  showModifyScenario = () => {

    this.setState( {
      modifyScenario: true
    } );

  }

  hideModifyScenario = () => {

    this.setState( {
      modifyScenario: false
    } );

  }

  addBody = ( e ) => {

    e.preventDefault();

    //Get the form data, extract it and put it into an object literal

    const form = new FormData( e.target );

    const values = form.values();
    const keys = form.keys();

    const body = {
      type: 'custom'
    };

    let key;

    while ( ( key = keys.next() ).done === false ) {

      const value = values.next().value;

      body[ key.value ] = isNaN( value ) === false ? parseFloat( value ) : value;

    }

    //Reset the form

    e.target.reset();

    const newScenario = this.state.scenario;
    newScenario.masses.push( body );

    this.setState( {
      scenario: newScenario
    } );

  }

  start = () => {

    this.setState( {
      running: true
    } );

  }

  reset = () => {

    this.setState( {
      running: false
    } );

  }

  render() {

    return (

    <div className="pageWrapper">

      { this.state.running === false ? <SimulationInputs modifyScenario={ this.state.modifyScenario } showModifyScenario={ this.showModifyScenario } hideModifyScenario={ this.hideModifyScenario } setBodyParam={ this.setBodyParam } addBody={ this.addBody } updateScenario={ this.updateScenario } scenario={ this.state.scenario } scenarios={ this.state.scenarios } masses={ this.props.masses } colors={ this.props.colors } start={ this.start } /> : <SceneWrapper scenario={ this.state.scenario } reset={ this.reset } /> }

    </div>

    );
  }

}

SimulatorContainer.propTypes = {
  scenarios: React.PropTypes.object.isRequired,
  colors: React.PropTypes.array.isRequired,
  masses: React.PropTypes.array.isRequired
};

export default SimulatorContainer;
