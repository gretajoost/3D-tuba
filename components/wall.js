export default {
    
    template: `
    <a-entity class="wall" >
         <a-plane  
          
         position="0 2 0" width="10" height="4" class="wall" color= "lightcoral">
         <a-entity position="0 0 0.01">
                    <slot />
         </a-entity>
         </a-plane>
         </a-entity>
    `
}
