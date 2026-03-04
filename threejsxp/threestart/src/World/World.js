import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createCuboid } from "./components/cuboid.js";
import { createBuffer } from "./components/buffer.js";
import { createMiniCube } from "./components/minicube.js";
import { createLights } from "./components/lights.js";
import { createScene } from "./components/scene.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import {Loop} from "./systems/Loop.js"
let camera, renderer, scene,loop;

class World {
    constructor(container) {
        
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        loop=new Loop(camera,scene,renderer)
        // console.log(document)

        container.append(renderer.domElement);

        const cube = createCube(0, 0, 0);
        const cuboid = createCuboid(-6, 0, 0);
        const buffer = createBuffer(4, 0, 0);
        const minicube = createMiniCube(1.5,0, 0)
        cube.add(minicube);
        const lights = createLights();
        
        loop.updatables.push(cube,camera,lights,cuboid)
        
        scene.add(cube, lights);
        scene.add(cuboid);
        scene.add(buffer);
        const resizer = new Resizer(container, camera, renderer);
        
        
        // resizer.onResize=()=>{
        //     this.render()
        // }
    }
    render() {
        renderer.render(scene, camera);
    }
    start(){
        loop.start()
    }
    stop(){
        loop.stop()
    }
}
export { World };
