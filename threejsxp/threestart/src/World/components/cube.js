import {MeshStandardMaterial,BoxGeometry,ConeGeometry,Triangle,BoxBufferGeometry,Mesh,MeshBasicMaterial,CircleGeometry,TorusGeometry,SphereGeometry} from 'three';
function createCube(pos1,pos2,pos3){
    const geometry=new BoxBufferGeometry(2,2,2)
    // const geometry=new CircleGeometry(2,30,6)             //Circle 
    // const geometry=new TorusGeometry(2, 0.5, 16, 100)  //Torus
    // const geometry=new SphereGeometry(2, 30, 32)       //Sphere
    // const geometry=new ConeGeometry(1, 2, 100)       //Cone
    // const geometry=new BoxGeometry(2, 2, 2)       //Box Rectangle
    // const geometry=new Triangle(2, 30, 32)       //Sphere
    // const material=new MeshBasicMaterial({color:'purple'});
    // const spec={color:'purple'}
    // const material=new MeshStandardMaterial(spec);
    const material=new MeshStandardMaterial({color:'purple'});
    // const material=new MeshBasicMaterial({color:'red',fog:true,wireframe:true,vertexColors:true});
    const cube=new Mesh(geometry,material)
    cube.position.set(pos1,pos2,pos3)
    // cube.rotation.set(-0.5,-0.5,0.8)
    cube.rotation.set(-0.5,-0.1,0.8)
    return cube;
}
export {createCube};