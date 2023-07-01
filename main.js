import * as THREE from 'three';

///////////////////////////
// GLOBALS
let scene;
let camera;
let renderer;
let clock = new THREE.Clock();
///////////////////////////

///////////////////////////
// ADD YOUR GLOBALS HERE
let cube;
// ...
///////////////////////////

///////////////////////////
//  ADD YOUR CODE HERE AND CALL IT IN THE FUNCTIONS BELOW
function createCube()
{
  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
  cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
}

function rotateCube()
{
  let delta = clock.getDelta();
  cube.rotateY(5 * delta);
}
// ..
///////////////////////////

///////////////////////////
// CALL YOUR FUNCTIONS HERE

// executes once at start
function start()
{
  createCube();
}

// executes every frame
function tick() {
  rotateCube();
  requestAnimationFrame(tick);
  renderer.render(scene, camera);
}

///////////////////////////

///////////////////////////
// BOILERPLATE
function setup()
{
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  camera.position.z = 5;
}

// executing code
setup();
start();
tick();
///////////////////////////
