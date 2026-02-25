import * as THREE from 'three'; 
function createMiniCube(pos1,pos2,pos3){
  const geometry=new THREE.BoxGeometry(0.5,0.5,0.5)
  const material=new THREE.MeshStandardMaterial({color:'red'})
  const minicube=new THREE.Mesh(geometry,material);
  // minicube.position.set(1,1,1)
  minicube.position.set(pos1,pos2,pos3)
  return minicube
}
export {createMiniCube}
