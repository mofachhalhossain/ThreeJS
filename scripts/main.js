import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const orbit = new OrbitControls( camera, renderer.domElement );


// const axesHelper = new THREE.AxesHelper( 5 );
// scene.add( axesHelper );
camera.position.set(0,0,10);
orbit.update();


const geometry = new THREE.BoxGeometry( 2, 2, 2 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x3f7b9d} );
const cube = new THREE.Mesh( geometry, material ); 

cube.position.set(0, 0, 1.5)


const pgeometry = new THREE.PlaneGeometry( 10, 10 );
const pmaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
const plane = new THREE.Mesh(pgeometry, pmaterial );

scene.add( cube );
scene.add( plane );


function animation(time){
    cube.rotation.x = time / 10000;
    cube.rotation.y = time / 10000;
    renderer.render( scene, camera );
}



renderer.setAnimationLoop(animation)

