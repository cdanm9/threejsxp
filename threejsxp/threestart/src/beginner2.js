import {World} from './World/World.js';

function main(){
    const container=document.querySelector('#scene-container')
    const world=new World(container)
    // const world=new World()
    // console.log(world.camera)
    // console.log(world.scene)
    // console.log(world.renderer)
    world.render()
    // const oButton=document.querySelector('#start-button')
    // oButton.addEventListener('click',onButtonClick)
}
main()


// window.onButtonClick=function(){
//     const container=document.querySelector('#scene-container')
//     const world=new World(container)
//     world.render()
// }