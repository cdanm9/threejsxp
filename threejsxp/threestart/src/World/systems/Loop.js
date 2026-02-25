import {Timer} from 'three';
const timer=new Timer()
class Loop{
  constructor(camera,scene,renderer){
    // this.container=container
    this.camera=camera;
    this.scene=scene
    this.renderer=renderer
    this.updatables=[]
    // timer.connect(document)
  }
  start(){
    this.renderer.setAnimationLoop(()=>{
      this.renderer.render(this.scene,this.camera)
      this.tick()
    })
  }
  stop(){
    this.renderer.setAnimationLoop(null)
  }
  tick(){
    timer.update();
    let delta=timer.getDelta()
    for(const object of this.updatables){
      object.tick(delta)
    }
  }
}
export {Loop}