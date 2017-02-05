import React from 'react';
import '../css/Slider.css';

class Slider extends React.Component {

  constructor( props ) {

    super( props );

    this.state = {
      val: 0
    };

  }

  static propTypes = {

    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    max: React.PropTypes.number.isRequired,
    min: React.PropTypes.number.isRequired,
    step: React.PropTypes.number.isRequired

  }

  updateVal = (e) => {

    this.setState( {
      val: e.target.value
    } );

  }

  render() {

    return (

    <div>

      <label className="sliderLabel">{ this.props.label }</label>

      <div className="sliderValue">{ this.state.val }</div>

      <input className="slider" type="range" name={ this.props.name } max={ this.props.max } min={ this.props.min } step={ this.props.step } required={ true } onInput={ this.updateVal } />

    </div>

    );

  }

}

export default Slider;
