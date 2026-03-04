import {BoxGeometry,ConeGeometry,Mesh,MeshBasicMaterial,CircleGeometry,TorusGeometry,SphereGeometry, Plane, PlaneGeometry} from 'three';
function createCuboid(pos1,pos2,pos3){
    const geometry=new BoxGeometry(1,2,1)    
    const material=new MeshBasicMaterial({color:'blue'});
    const cuboid=new Mesh(geometry,material)
    cuboid.position.set(pos1,pos2,pos3)
    cuboid.rotation.set(0.5,-0.8,0.1)


    let placement=0

    cuboid.tick=(delta)=>{
        placement=placement+0.025
        const disp=placement%12.5
        cuboid.position.x=-6+disp
    }

    return cuboid;
}
export {createCuboid};