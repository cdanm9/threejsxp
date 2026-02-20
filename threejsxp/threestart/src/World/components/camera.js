import {PerspectiveCamera} from 'three';
function createCamera(){
    // const container=document.querySelector('scene-container')
    const fov=35,aspect=1,near=0.1,far=100;
    // const aspect=container.clientHeight/container.clientWidth
    const camera=new PerspectiveCamera(fov,aspect,near,far);
    camera.position.set(0,0,10)
    return camera
}
export {createCamera}