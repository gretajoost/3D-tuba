export default {
     // x y z
     // vasak parem, üles alla, kaugemale lähemale
    template: `
        <a-scene class="Scene"  >
        <slot name="assets" />
        <a-entity position="0 0 -4">
          <slot />
          </a-sky color="#ECECEC"></a-sky>
          </a-entity> 
        </a-scene>
    `
}