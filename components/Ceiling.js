export default {
    
    template: `
    <a-entity class="Ceiling">
        <a-plane material="src: ./assets/textures/poolwater.jpg; repeat: 6 6" class="Ceiling"  rotation="90 0 0" width="10" height="10" color="white"></a-plane>
        <slot /> 
    </a-entity>
    `
}
