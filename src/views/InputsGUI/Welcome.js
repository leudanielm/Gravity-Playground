import React from 'react';

const welcomeStyles = {
  backgroundColor: '#000',
  position: 'absolute',
  zIndex: 9,
  width: '50%',
  left: '25%',
  top: '38%',
  border: '1px solid #d8d8d8',
  padding: '15px'
};

const overlayStyles = {
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  position: 'absolute',
  zIndex: 8,  
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};

const closeWelcomeStyles = {
  float: 'right',
  cursor: 'pointer',
  padding: 8,
  borderRadius: '100%',
  color: '#fff',
  border: '1px solid #fff',
  fontWeight: 'bold'
};

const marginStyle = {
  marginTop: 15,
  marginBottom: 15
}

const titleStyles = {
  fontFamily: 'Days One'
};

const Welcome = ( props ) => <div style={ overlayStyles }>

			       <div style={ welcomeStyles }>

                               <span style={ closeWelcomeStyles } onClick={ props.closeWelcome }>X</span>

                               <h2 style={ titleStyles }>Welcome to Gravity Playground</h2>

                               <p style={ marginStyle }>Gravity Playground is a Newtonian n-body gravity simulator that lets you simulate and modify an array of n-body systems ranging from the inner solar system to systems conjured by my imagination.</p>

                               <h4>Features</h4>

			       <ul style={ marginStyle }>
                                 <li>Systems can be visualized both in 3D and 2D</li>
                                 <li>Change the value of the gravitational constant</li>
                                 <li>Change how the gravitational force behaves over distances</li>
                                 <li>Add new planets, moons and even stars to a system</li>
                               </ul>

                               <label>Don't show this information again</label>
                               <input type="checkbox" onClick={ props.disableWelcomeMessage } />

			       </div>

                             </div>;

export default Welcome;