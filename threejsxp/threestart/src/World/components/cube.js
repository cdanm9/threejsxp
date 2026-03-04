import {MeshToonMaterial,MeshPhysicalMaterial,MeshPhongMaterial,MeshNormalMaterial,MeshMatcapMaterial,MeshLambertMaterial,MeshDepthMaterial,MeshStandardMaterial,BoxGeometry,ConeGeometry,Triangle,Mesh,MeshBasicMaterial,CircleGeometry,TorusGeometry,SphereGeometry,MathUtils} from 'three';

function createCube(pos1,pos2,pos3){
    const geometry=new BoxGeometry(2,2,2)
    // const geometry=new CircleGeometry(2,30,6)             //Circle 
    // const geometry=new TorusGeometry(2, 0.5, 16, 100)  //Torus
    // const geometry=new SphereGeometry(2, 30, 32)       //Sphere
    // const geometry=new ConeGeometry(1, 2, 100)       //Cone
    // const geometry=new BoxGeometry(2, 2, 2)       //Box Rectangle
    // const geometry=new Triangle(2, 30, 32)       //Sphere
    // const material=new MeshBasicMaterial({color:'purple'});
    // const spec={color:'purple'}
    // const material=new MeshStandardMaterial(spec);
    // const material=new MeshLambertMaterial({color:'purple'});
    // const material=new MeshMatcapMaterial({color:'purple'});
    // const material=new MeshNormalMaterial({color:'purple'});
    // const material=new MeshPhongMaterial({color:'purple'});
    // const material=new MeshPhysicalMaterial({color:'purple'});
    // const material=new MeshToonMaterial({color:'purple'});
    const material=new MeshStandardMaterial ({color:'purple'});
    // const material=new MeshStandardMaterial({color:'purple'});
    // const material=new MeshDepthMaterial();
    // const material=new MeshBasicMaterial({color:'red',fog:true,wireframe:true,vertexColors:true});
    const cube=new Mesh(geometry,material)
    cube.position.set(pos1,pos2,pos3)
    // cube.position.set(pos1,pos2,pos3)
    // cube.rotation.set(-0.5,-0.5,0.8)
    // cube.position.set(-3.9,0.095,0)
    // cube.rotation.set(-0.5,-0.1,0.8)
    // const radiansPerSecond=MathUtils.degToRad(3.6)
    const radiansPerSecond=MathUtils.degToRad(3.6)
    const radiansy=MathUtils.degToRad(45)
    const radiansx=MathUtils.degToRad(30)
    // cube.rotation.set(0,0,radiansPerSecond)
    cube.rotation.set(radiansx, -radiansy, 0);
    // let i=4,j=1


    cube.tick=(delta)=>{
        // console.log(delta)
        cube.rotation.z+=radiansPerSecond*delta
        // let pos
        // if(Math.round(Math.random()*10)%2==0){
        //     i=i+0.01;j=j+0.01
        //     // cube.position.set(i,0,0)
        //     cube.scale.set(j,j,j)
        // }else{
        //     console.log(pos)
        //     i=i-0.01;j=j-0.01
        //     // pos=Math.random()
        //     cube.position.set(i,0,0)
        //     cube.scale.set(j,j,j)
        // }
        // cube.rotation.x+=radiansPerSecond*delta
        // cube.rotation.y+=radiansPerSecond*delta
        
        // console.log(radiansPerSecond*delta)
    }
    // cube.scale.set(2,2,2)
    return cube;


    
}
export {createCube};