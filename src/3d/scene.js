import * as THREE from 'three';
import nBodyProblem from '../algorithms/nBodyProblem';

const scene = ( function () {

  let w = window.innerWidth;
  let h = window.innerHeight;

  let requestAnimationFrameId = null;
  let scene = null;
  let camera = null;
  let renderer = null;
  let system = null;

  let orbitButton = null;
  let view3DButton = null;

  let pathCanvas = document.createElement( 'canvas' );
  pathCanvas.style.display = 'none';
  let ctxPath = pathCanvas.getContext( '2d' );

  let massCanvas = document.createElement( 'canvas' );
  massCanvas.style.display = 'none';
  massCanvas.style.position = 'absolute';
  massCanvas.style.zIndex = 2;
  massCanvas.style.top = 0;
  massCanvas.style.bottom = 0;
  let ctxMass = massCanvas.getContext( '2d' );

  pathCanvas.width = w;
  pathCanvas.height = h;

  massCanvas.width = w;
  massCanvas.height = h;

  ctxPath.translate( w / 2, h / 2 );
  ctxMass.translate( w / 2, h / 2 );

  function showOrbits() {

    pathCanvas.style.display = 'block';
    massCanvas.style.display = 'block';

  }

  function hideOrbits() {

    pathCanvas.style.display = 'none';
    massCanvas.style.display = 'none';

  }

  function createBody( radius, name, type ) {

    let loader = new THREE.TextureLoader;

    let geometry = new THREE.SphereGeometry( radius, 32, 32 );

    let material = new THREE.MeshPhongMaterial( {
      map: type !== 'custom' ? loader.load( 'textures/' + name + '.jpg' ) : loader.load( 'textures/Acid.jpg' )
    } );

    let mesh = new THREE.Mesh( geometry, material );

    mesh.rotation.x = 1.5;

    scene.add( mesh );

    return mesh;
  }

  function init( scenario, container, camPos, camFocus, viewOrbits, view3D ) {

    orbitButton = viewOrbits;

    orbitButton.addEventListener( 'click', showOrbits, false );

    view3DButton = view3D;

    view3DButton.addEventListener( 'click', hideOrbits, false );

    scene = new THREE.Scene();

    let light = new THREE.AmbientLight( 0x404040, 4 );
    scene.add( light );

    camera = new THREE.PerspectiveCamera( 50, w / h, 0.0001, 1500 );
    camera.up.set( 0, 0, 1 );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( w, h );

    container.appendChild( pathCanvas );
    container.appendChild( massCanvas );
    container.appendChild( renderer.domElement );

    system = new nBodyProblem( {
      g: scenario.g,
      law: scenario.law,
      dt: scenario.dt,
      masses: scenario.masses
    } );

    for (let i = 0; i < system.masses.length; i++) {

      system.masses[ i ].manifestation = createBody( system.masses[ i ].radius, system.masses[ i ].name );

    }

    const render = function () {

      requestAnimationFrameId = requestAnimationFrame( render );
      system.updatePositionVectors().updateVelocityVectors().updateBarycenter();

      ctxMass.clearRect( -0.5 * w, -0.5 * h, w, h );

      for (let i = 0; i < system.masses.length; i++) {

        let mass = system.masses[ i ];

        let x = system.masses[ i ].x * scenario.scale;
        let y = system.masses[ i ].y * scenario.scale;
        let z = system.masses[ i ].z * scenario.scale;

        mass.manifestation.position.set( x, y, z );

        if ( camPos.value === mass.name ) {

          camera.position.set( x, y, z + 20 );

        }

        if ( camFocus.value === mass.name ) {

          camera.lookAt( new THREE.Vector3( x, y, z ) );

        }

        ctxPath.fillStyle = mass.color;
        ctxPath.fillRect( x, y, 1, 1 );

        ctxMass.beginPath();
        ctxMass.fillStyle = mass.color;
        ctxMass.arc( x, y, 6, 0, 2 * Math.PI );
        ctxMass.fill();

        let barycenterX = system.x * scenario.scale;
        let barycenterY = system.y * scenario.scale;

        ctxMass.strokeStyle = 'limegreen';
        ctxMass.lineWidth = 2;
        ctxMass.beginPath();
        ctxMass.moveTo( barycenterX - 20, barycenterY );
        ctxMass.lineTo( barycenterX + 20, barycenterY );
        ctxMass.moveTo( barycenterX, barycenterY - 20 );
        ctxMass.lineTo( barycenterX, barycenterY + 20 );
        ctxMass.stroke();

      }

      renderer.render( scene, camera );

    };

    window.addEventListener( 'resize', onWindowResize, false );

    function onWindowResize() {

      w = window.innerWidth;
      h = window.innerHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize( w, h );

      pathCanvas.width = w;
      pathCanvas.height = h;

      massCanvas.width = w;
      massCanvas.height = h;

      ctxPath.clearRect( -0.5 * w, -0.5 * h, w, h );
      ctxMass.clearRect( -0.5 * w, -0.5 * h, w, h );

      ctxPath.translate( w / 2, h / 2 );
      ctxMass.translate( w / 2, h / 2 );

    }

    render();

  }

  function reset() {

    scene = null;
    camera = null;
    renderer = null;
    system = null;
    cancelAnimationFrame( requestAnimationFrameId );
    requestAnimationFrameId = null;
    ctxPath.clearRect( -0.5 * w, -0.5 * h, w, h );
    orbitButton.removeEventListener( 'click', showOrbits );
    view3DButton.removeEventListener( 'click', hideOrbits );
    renderer.domElement.parentNode.removeChild( renderer.domElement );

  }

  return {
    init: init,
    reset: reset
  };

}());

export default scene;
