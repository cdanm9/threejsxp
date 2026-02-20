class Resizer{
    constructor(container,camera,renderer){
        camera.aspect=container.clientWidth/container.clientHeight;
        // camera.lookAt(0,0,0)
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth,container.clientHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
    }
}
export {Resizer};