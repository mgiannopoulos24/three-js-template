import * as THREE from 'three';
import InputKeys from './inputKeys';

let scene, camera, renderer, cube;
let colorChangeInterval;
let currentColor = new THREE.Color(0xffff00); // Start with yellow

function createCube() {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: currentColor });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
}

function exampleInput() {
  if (InputKeys.keys["KeyW"]) {
    if (!colorChangeInterval) {
      let hue = 0; // Start from red hue
      colorChangeInterval = setInterval(() => {
        hue = (hue + 1) % 360; // Increment hue and loop back to 0 at 360
        currentColor.setHSL(hue / 360, 1, 0.5); // Full saturation, 50% lightness
        cube.material.color.set(currentColor);
      }, 10); // Rapidly change hue every 10ms
    }
  } else {
    if (colorChangeInterval) {
      clearInterval(colorChangeInterval);
      colorChangeInterval = null;
    }
  }
}

function setupScene() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  camera.position.z = 5;
}

function tick() {
  requestAnimationFrame(tick);
  renderer.render(scene, camera);
  exampleInput();
}

function start() {
  createCube();
}

setupScene();
start();
tick();
