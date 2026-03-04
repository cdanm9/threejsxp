import {PerspectiveCamera, RGBA_ASTC_10x5_Format} from 'three';
function createCamera(){
    // const container=document.querySelector('scene-container')
    const fov=35,aspect=1,near=0.1,far=100;
    // const aspect=container.clientHeight/container.clientWidth
    const camera=new PerspectiveCamera(fov,aspect,near,far);
    // camera.position.set(-1,0,2.5)
    camera.position.set(0,0,10)
    let flag=0
    let speed=0.0167,timer=0
    camera.tick=(delta)=>{
        
        // console.log(Math.floor(camera.position.z))
        // if(camera.position.z<20==0&&flag==0){
        //     camera.position.z=camera.position.z-0.01
        //     flag=1
        // }else if(flag==1 && camera.position.z>10){
        //     camera.position.z=camera.position.z-0.01
        // }else{
        //     camera.position.z=camera.position.z+0.01
        //     flag=0
        // }
        
        // timer=timer+delta
        // const mod=timer%10
        // camera.position.z=10+mod

        
    }
    return camera
}
export {createCamera}