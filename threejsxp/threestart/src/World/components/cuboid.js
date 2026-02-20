import {BoxGeometry,ConeGeometry,BoxBufferGeometry,Mesh,MeshBasicMaterial,CircleGeometry,TorusGeometry,SphereGeometry, Plane, PlaneGeometry} from 'three';
function createCuboid(pos1,pos2,pos3){
    // const geometry=new BoxBufferGeometry(2,2,2)
    // const geometry=new CircleGeometry(2,30,6)             //Circle 
    // const geometry=new CircleGeometry(2,2)             //Triangle
    // const geometry=new PlaneGeometry(2,4)             //Rectangle
    const geometry=new BoxGeometry(1,2,1)             //Rectangle
    // const geometry=new TorusGeometry(2, 0.5, 16, 100)  //Torus
    // const geometry=new SphereGeometry(2, 30, 32)       //Sphere
    // const geometry=new ConeGeometry(1, 2, 100)       //Cone
    // const geometry=new BoxGeometry(2, 2, 2)       //Box 
    const material=new MeshBasicMaterial({color:'blue'});
    const cuboid=new Mesh(geometry,material)
    cuboid.position.set(pos1,pos2,pos3)
    cuboid.rotation.set(0.5,-0.8,0.1)

    return cuboid;
}
export {createCuboid};