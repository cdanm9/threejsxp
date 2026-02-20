import * as THREE from 'three';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
function createLights(){
    const light=new THREE.DirectionalLight('white',8);
    // const light=new THREE.PointLight('white',8);
    // const light=new THREE.SpotLight('white',8);
    light.position.set(10,10,10) //DirectionalLight
    // light.position.set(0.1,0.1,0.1) //SpotLight
    // light.position.set(0.1,0.1,0.1)//PointLight
    // light.castShadow = true;

    // RectAreaLightUniformsLib.init(); // only relevant for WebGLRenderer
    // const light = new THREE.RectAreaLight('white', 8);
    // light.position.set( 1, 1, 2.5 );//RectAreaLight
    // light.lookAt( 0, 0, 0 );

    // RectAreaLightUniformsLib.init()
    // const intensity=8
    return light;
}
export{createLights}