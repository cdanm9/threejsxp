import {Scene,
    MeshBasicMaterial,
    PerspectiveCamera,
    WebGLRenderer,
    BoxBufferGeometry,
    Color,
    Mesh} from 'three';
const container=document.querySelector('#scene-container');
const scene =new Scene();
scene.background=new Color('skyblue')
const fov=35
const aspect=container.clientWidth/container.clientHeight;
const far=100;
const near=0.1;
const camera=new PerspectiveCamera(fov,aspect,near,far)
camera.position.set(0,0,10)

const geometry=new BoxBufferGeometry(2,2,2);
const material=new MeshBasicMaterial();
const cube =new Mesh(geometry,material);
scene.add(cube)
const renderer=new WebGLRenderer()
// next, set the renderer to the same size as our container element
renderer.setSize(container.clientWidth,container.clientHeight)
// finally, set the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio);
container.append(renderer.domElement)
renderer.render(scene,camera)
