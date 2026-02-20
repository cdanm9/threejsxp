import {createCamera} from './components/camera.js';
import {createCube} from './components/cube.js';
import {createCuboid} from './components/cuboid.js';
import {createCube3} from './components/cube3.js';
import {createLights} from './components/lights.js';
import {createScene} from './components/scene.js';

import {createRenderer} from './systems/renderer.js';
import {Resizer} from './systems/Resizer.js';

let camera,renderer,scene;

class World{
    constructor(container){
        camera=createCamera();
        scene=createScene();
        renderer=createRenderer(); 
        
        container.append(renderer.domElement)

        const cube=createCube(-4,0,0);
        const cube2=createCuboid(0,0,0);
        const cube3=createCube3(4,0,0);
        const lights=createLights()
        scene.add(cube,lights)
        scene.add(cube2)
        scene.add(cube3)
        const resizer = new Resizer(container, camera, renderer);
    }
    render(){
        renderer.render(scene,camera)
    }

}
export {World}