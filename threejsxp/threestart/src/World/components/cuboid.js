import {BoxGeometry,ConeGeometry,Mesh,MeshBasicMaterial,CircleGeometry,TorusGeometry,SphereGeometry, Plane, PlaneGeometry} from 'three';
function createCuboid(pos1,pos2,pos3){
    const geometry=new BoxGeometry(1,2,1)    
    const material=new MeshBasicMaterial({color:'blue'});
    const cuboid=new Mesh(geometry,material)
    cuboid.position.set(pos1,pos2,pos3)
    cuboid.rotation.set(0.5,-0.8,0.1)

    return cuboid;
}
export {createCuboid};