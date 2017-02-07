

class nBodyProblem {

  constructor( parameters ) {

    //Remember to be consistent in your use of units!!! 

    this.g = parameters.g; //Gravitational constant
    this.law = parameters.law; //Gravitational force law
    this.dt = parameters.dt; //Time step
    this.masses = parameters.masses; //Masses to be simulated

    this.systemMass = 0;

    //Barycenter position

    this.x = 0;
    this.y = 0;
    this.z = 0;

    //Fire init methods

    this.calculateSystemMass().calculateMuForAllMasses().leapfrog();

  }

  //To calculate the position of the barycenter we first need to know the total mass of the whole system being simulated

  calculateSystemMass() {

    let massesLength = this.masses.length;

    for (let i = 0; i < massesLength; i++) this.systemMass += this.masses[ i ].m;

    return this;

  }

  //We only need big G to calculate gravity so to improve performance, calculate big G before the simulation commences

  calculateMuForAllMasses() {

    let massesLength = this.masses.length;

    for (let i = 0; i < massesLength; i++) this.masses[ i ].mu = this.g * this.masses[ i ].m;

    return this;
  }

  //Allows for a higher time step

  leapfrog() {

    this.dt *= 0.5;
    this.updateVelocityVectors();
    this.dt *= 2.0;

    return this;
  }

  updatePositionVectors() {

    let massesLength = this.masses.length;

    for (let i = 0; i < massesLength; i++) {

      let mass_i = this.masses[ i ];

      mass_i.x += mass_i.vx * this.dt;
      mass_i.y += mass_i.vy * this.dt;
      mass_i.z += mass_i.vz * this.dt;

    }

    return this;

  }

  updateVelocityVectors() {

    let massesLength = this.masses.length;

    for (let i = 0; i < massesLength; i++) {

      let ax = 0;
      let ay = 0;
      let az = 0;

      let mass_i = this.masses[ i ];

      for (let j = 0; j < massesLength; j++) {

	//Don't calculate self-gravity or the system will go poooooooooof

        if ( i !== j ) {

          let mass_j = this.masses[ j ];

          let dx = mass_j.x - mass_i.x;
          let dy = mass_j.y - mass_i.y;
          let dz = mass_j.z - mass_i.z;

          let distsq = dx * dx + dy * dy + dz * dz;

          let fact = mass_j.mu / Math.pow( distsq, this.law );

          ax += dx * fact;
          ay += dy * fact;
          az += dz * fact;

        }

      }

      mass_i.vx += ax * this.dt;
      mass_i.vy += ay * this.dt;
      mass_i.vz += az * this.dt;

    }

    return this;

  }

  updateBarycenter() {

    let massesLength = this.masses.length;
    let systemMass = this.systemMass;

    let x = 0;
    let y = 0;
    let z = 0;

    for (let i = 0; i < massesLength; i++) {

      let mass_i = this.masses[ i ];
      let m = mass_i.m;

      x += mass_i.x * m;
      y += mass_i.y * m;
      z += mass_i.z * m;

    }

    this.x = x / systemMass;
    this.y = y / systemMass;
    this.z = z / systemMass;

    return this;

  }

}

export default nBodyProblem;
