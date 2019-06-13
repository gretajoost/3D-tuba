export default {
    
    template: `
    <a-entity class="wall" >
         <a-plane  
         material="src: ./assets/textures/pooltiles.png; repeat: 8 2" 
         position="0 2 0" width="10" height="4" class="wall" color= "white">
         <a-entity position="0 0 0.01">
                    <slot />
         </a-entity>
         </a-plane>
         </a-entity>
    `
}
