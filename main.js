import * as THREE from 'three';
import InputKeys from './inputKeys';


let scene;
let camera;
let renderer;
let cube;
let canvas;

function createCube()
{
  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
  cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
}

function exampleInput()
{
  if(InputKeys.keys["KeyW"])
  {
    console.log("pressing w");
  }
}

// executes once at start
function start()
{
  createCube();
}

// executes every frame
function tick() {
  requestAnimationFrame(tick);
  renderer.render(scene, camera);
  exampleInput();
}


function setupScene()
{
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  canvas = document.body.appendChild(renderer.domElement);

  camera.position.z = 5;
}

setupScene();
start();
tick();
