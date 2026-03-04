import {World} from './World/World.js';

function main(){
    const container=document.querySelector('#scene-container')
    const world=new World(container)


    const btn=document.createElement('button')
    btn.textContent="Animate"
    Object.assign(btn.style, {
      position: 'fixed',
      top: '0',
      left: '10',
      // width: '100%',
      // padding: '15px 0'
    });
    // document.body.append(btn)
    container.append(btn)
    let flag=true

    btn.addEventListener('click',function(){
        if(flag){
            world.start()
            flag=false
        }else{
            world.stop()
            flag=true
        }
        
    })
    // document.body.append(btn)
    // const world=new World()
    // console.log(world.camera)
    // console.log(world.scene)
    // console.log(world.renderer)
    // world.start()
    // const oButton=document.querySelector('#start-button')
    // oButton.addEventListener('click',onButtonClick)
}
main()


// window.onButtonClick=function(){
//     const container=document.querySelector('#scene-container')
//     const world=new World(container)
//     world.render()
// }