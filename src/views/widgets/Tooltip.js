import React from 'react';

class Tooltip extends React.Component {

  constructor( props ) {

    super( props );

    this.state = { tip: false };

  }

  triggerTip = () => {

    this.setState( { tip: true } );

  }

  removeTip = () => {

    this.setState( { tip: false } );

  }

  renderTip() {

    const el = this._trigger;

    const elRect = el.getBoundingClientRect();

    const tipStyle = {
      maxWidth: '20%',
      backgroundColor: '#000',
      padding: 10,
      border: '1px solid #d8d8d8',
      position: 'absolute',
      zIndex: 999,
      top: elRect.bottom,
      left: elRect.right
    };

    return (

      <span style={ tipStyle }>{ this.props.content }</span>

    );

  }

  render() {

    const wrapperStyle = {
      display: 'inline-block',
      marginLeft: 5
    };

    const triggerStyle = {
      cursor: 'pointer',
      padding: 5,
      backgroundColor: '#252628',
      marginTop: 10
    };

    return (

      <div style={ wrapperStyle }>

        <span  onMouseOver={ this.triggerTip } onMouseOut={ this.removeTip } ref={ ( el ) => this._trigger = el } style={ triggerStyle }>[ ? ]</span>

        { this.state.tip === true && this.renderTip() }

      </div>

    );

  }

}

export default Tooltip;