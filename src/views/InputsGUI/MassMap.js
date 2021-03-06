import React from 'react';
import '../../css/MassMap.css';

class MassMap extends React.Component {

  static propTypes = {

    timeStep: React.PropTypes.number.isRequired,
    scale:  React.PropTypes.number.isRequired,
    masses:  React.PropTypes.array.isRequired

  }

  renderMap() {

    const ctx = this.refs.canvas.getContext( '2d' );
    const w = this.refs.canvas.width = window.innerWidth;
    const h = this.refs.canvas.height = window.innerHeight;

    ctx.translate( w / 2, h / 2 );

    for (let i = 0; i < this.props.masses.length; i++) {

      let x = this.props.masses[ i ].x * this.props.scale;
      let y = this.props.masses[ i ].y * this.props.scale;

      //Draw masses

      ctx.beginPath();
      ctx.arc( x, y, 5, 0, 2 * Math.PI );
      ctx.fillStyle = this.props.masses[ i ].color;
      ctx.fill();

      //Draw velocity vectors

      ctx.beginPath();
      ctx.moveTo( x, y );
      ctx.lineTo( x + (((this.props.masses[ i ].vx * this.props.timeStep) * this.props.scale) * 200), y + (((this.props.masses[ i ].vy * this.props.timeStep) * this.props.scale) * 200));
      ctx.strokeStyle = 'red';
      ctx.stroke();

      //Draw names

      ctx.font = "14px Tahoma";
      ctx.fillText( this.props.masses[ i ].name, x + 10, y );

    }

  }

  componentDidUpdate() {

    this.renderMap();

  }

  componentDidMount() {

    this.renderMap();

  }

  render() {

    return (

    <div>
      
      <canvas ref="canvas" className="massMap" />
      
    </div>

    );

  }

}

export default MassMap;
