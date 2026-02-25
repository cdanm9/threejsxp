import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createCuboid } from "./components/cuboid.js";
import { createBuffer } from "./components/buffer.js";
import { createMiniCube } from "./components/minicube.js";
import { createLights } from "./components/lights.js";
import { createScene } from "./components/scene.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";

let camera, renderer, scene;

class World {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();

        container.append(renderer.domElement);

        const cube = createCube(-4, 0, 0);
        const cuboid = createCuboid(0, 0, 0);
        const buffer = createBuffer(4, 0, 0);
        const minicube = createMiniCube(1.5,0, 0)
        cube.add(minicube);
        const lights = createLights();
        scene.add(cube, lights);
        scene.add(cuboid);
        scene.add(buffer);
        const resizer = new Resizer(container, camera, renderer);
        resizer.onResize=()=>{
            this.render()
        }
    }
    render() {
        renderer.render(scene, camera);
    }
}
export { World };
