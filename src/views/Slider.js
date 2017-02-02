import React from 'react';

class Slider extends React.Component {

  constructor( props ) {

    super( props );

    this.state = {
      val: 0
    };

  }

  updateVal = (e) => {

    this.setState( {
      val: e.target.value
    } );

  }

  render() {

    return (

    <div className="slider">

      <label>{ this.props.label }</label>

      <div className="sliderVal">{ this.state.val }</div>

      <input type="range" name={ this.props.name } max={ this.props.max } min={ this.props.min } step={ this.props.step } required={ true } onInput={ this.updateVal } />

    </div>

    );

  }

}

Slider.propTypes = {
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  max: React.PropTypes.number.isRequired,
  min: React.PropTypes.number.isRequired,
  step: React.PropTypes.number.isRequired
};

export default Slider;
