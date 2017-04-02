import store from '../store';
import * as sceneActions from '../actions/sceneActions';
import THREE from '../vendor/three';
import OrbitControls from '../vendor/OrbitControlsES6';
import star from './star';
import nBodyProblem from '../algorithms/nBodyProblem';

const scene = (function() {

  //Full screen action

  let w = window.innerWidth;
  let h = window.innerHeight;

  let requestAnimationFrameId = null;
  let scene = null;
  let camera = null;
  let controls = null;
  let renderer = null;
  let system = null;

  function createBody(radius, name, type, textureName) {

    let segments = type !== 'asteroid' ? 32 : 6;

    let geometry = new THREE.SphereGeometry(radius, segments, segments);

    let map;
    let bumpMap;

    if (type === undefined) {

      map = THREE.ImageUtils.loadTexture('textures/' + name + '.jpg');
      bumpMap = THREE.ImageUtils.loadTexture('textures/' + name + 'Bump.jpg');

    } else if (type === 'asteroid') {

      map = THREE.ImageUtils.loadTexture('textures/Phobos.jpg');
      bumpMap = THREE.ImageUtils.loadTexture('textures/PhobosBump.jpg');

    } else if (type === 'custom') {

      map = THREE.ImageUtils.loadTexture('textures/' + textureName + '.jpg');

    } else if (type === 'star') {

      return star(scene, camera, 0.55, 0.1, 0.5, 0, 0, 0);

    }

    let material = new THREE.MeshPhongMaterial({
      map: map,
      bumpMap: bumpMap,
      bumpScale: 0.1
    });

    let mesh = new THREE.Mesh(geometry, material);

    mesh.rotation.x = 1.5;

    scene.add(mesh);

    return mesh;

  }

  function init(scenario, webGlCanvas, massCanvas, pathCanvas) {

    //Set initial camera position and focus

    store.dispatch( sceneActions.setCameraPosition( scenario.masses[0].name ) );

    store.dispatch( sceneActions.setCameraFocus( scenario.masses[0].name ) );

    let ctxPath = pathCanvas.getContext('2d');
    let ctxMass = massCanvas.getContext('2d');

    pathCanvas.width = w;
    pathCanvas.height = h;

    massCanvas.width = w;
    massCanvas.height = h;

    ctxPath.translate(w / 2, h / 2);
    ctxMass.translate(w / 2, h / 2);

    scene = new THREE.Scene();

    //Light

    scene.add(new THREE.AmbientLight(0x404040, 3));

    camera = new THREE.PerspectiveCamera(50, w / h, 0.0001, 1500);

    //Prevent rolling of the camera when you view a body from another

    camera.up.set(0, 0, 1);

    camera.position.set(0, 90, 150);

    renderer = new THREE.WebGLRenderer({
      canvas: webGlCanvas,
      antialias: true,
      alpha: true
    });
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000);

    controls = new OrbitControls(camera, renderer.domElement);

    //Create a new n-body problem from the selected scenario

    system = new nBodyProblem({
      g: scenario.g,
      law: scenario.law,
      dt: scenario.dt,
      masses: scenario.masses
    });

    //Create visual manifestations of the planets, asteroids and star(s)

    for (let i = 0; i < system.masses.length; i++) {

      let mass = system.masses[i];

      mass.manifestation = createBody(mass.radius, mass.name, mass.type, mass.textureName);

    }

    const render = function() {

      requestAnimationFrameId = requestAnimationFrame(render);

      //Update state vectors

      system.updatePositionVectors().updateVelocityVectors().updateBarycenter();

      ctxMass.clearRect(-0.5 * w, -0.5 * h, w, h);

      //Put all the masses in their new positions and set camera position and focus

      for (let i = 0; i < system.masses.length; i++) {

        let mass = system.masses[i];

        let x = mass.x * scenario.scale;
        let y = mass.y * scenario.scale;
        let z = mass.z * scenario.scale;

        mass.manifestation.position.set(x, y, z);

        //Get camera position and focus from the store

        let sceneState = store.getState().sceneState;

        let camR = sceneState.cameraPosition;
        let camF = sceneState.cameraFocus;
        let name = mass.name;

        if (camR === name) {

          camera.position.set(x, y, z + (mass.radius * 1.6));

          controls.enabled = false;

        } else if (camR === 'free') {

          controls.enabled = true;

        }

        if (camF === name) {

          camera.lookAt(new THREE.Vector3(x, y, z));

          //If the camera mode is free, the user can pan, orbit and have fun

          if (camR === 'free') controls.target = new THREE.Vector3(x, y, z);

        }

        ctxPath.fillStyle = mass.color;
        ctxPath.fillRect(x, y, 1, 1);

        ctxMass.beginPath();
        ctxMass.fillStyle = mass.color;
        ctxMass.arc(x, y, 6, 0, 2 * Math.PI);
        ctxMass.fill();

        ctxMass.font = "14px Arial";
        ctxMass.fillText(mass.name, x + 8, y);

      }

      //Put the barycenter of the system in its new position

      let barycenterX = system.x * scenario.scale;
      let barycenterY = system.y * scenario.scale;

      ctxMass.strokeStyle = 'limegreen';
      ctxMass.lineWidth = 2;
      ctxMass.beginPath();
      ctxMass.moveTo(barycenterX - 20, barycenterY);
      ctxMass.lineTo(barycenterX + 20, barycenterY);
      ctxMass.moveTo(barycenterX, barycenterY - 20);
      ctxMass.lineTo(barycenterX, barycenterY + 20);
      ctxMass.stroke();

      ctxMass.fillStyle = 'limegreen';
      ctxMass.font = "14px Arial";
      ctxMass.fillText('Barycenter', barycenterX, barycenterY - 25);

      renderer.render(scene, camera);

    };

    //Makes the scene responsive
    //Note that traces are cleared when the size of the viewport changes

    window.addEventListener('resize', onWindowResize, false);

    function onWindowResize() {

      w = window.innerWidth;
      h = window.innerHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);

      pathCanvas.width = w;
      pathCanvas.height = h;

      massCanvas.width = w;
      massCanvas.height = h;

      ctxPath.clearRect(-0.5 * w, -0.5 * h, w, h);
      ctxMass.clearRect(-0.5 * w, -0.5 * h, w, h);

      ctxPath.translate(w / 2, h / 2);
      ctxMass.translate(w / 2, h / 2);

    }

    render();

  }


  function reset() {

    cancelAnimationFrame(requestAnimationFrameId);

  }

  //API

  return {
    init: init,
    reset: reset
  };

}());

export default scene;