# Gravity-Playground
Simple n-body gravity simulator written in JavaScript

<h2>About</h2>

Newtonian gravitational n-body simulator that allows you to simulate, visualize and modify a variety of systems ranging from the Earth and Moon system to multi-star systems conjured by my imagination. If you have ever caught yourself wondering what would happen to the solar system if you added a brown dwarf star to the asteroid belt (because we all do that, right?), you have come to the right place. 

The algorithm that I developed for solving Newton's equations of motion and gravity employs the leapfrog integrator and is reasonably stable over long periods of time, even for highly elliptical orbits, as long as the time step employed is not too large. 

This is a living project and I will add features on a semi-regular basis (time permitting!) and if you have any ideas or would like to contribute, feel free to tug the sleeve of my shirt and we'll talk about it. The more the merrier :).

Features I am planning on implementing:

<ul>
  <li>Collisions</li>
  <li>A controllable spacecraft</li>
  <li>The ability to construct a new scenario from scratch</li>
  <li>Include information about all the masses and make it a kind of 3D interactive solar system wikipedia
</ul>

<h2>Demo</h2>

<a href="http://mrhuffman.net/projects/gp">Click here</a>

<h2>Run</h2>

<code>npm start</code>

<h2>Build</h2>

<code>npm run build</code>


