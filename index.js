import Layout from './components/Layout.js'
import Scene from './components/Scene.js'
import Box from './components/Box.js'
import Wall from './components/wall.js'
import Floor from './components/Floor.js'
import Ceiling from './components/Ceiling.js'
import Rig from './components/Rig.js'

new Vue({
    el: '#app',
    components: { Layout, Scene, Box, Wall, Floor, Ceiling, Rig },
    template: `
    <Layout>
      <Scene>
        <template v-slot:assets>
          <a-assets>

          <a-asset-item id="kuubik2" src="./assets/models/kuubik2.obj"></a-asset-item>
          <a-asset-item id="kuubik2-mtl" src="./assets/models/kuubik2.mtl"></a-asset-item>

          </a-assets>
        </template>

        <a-entity class="kuubik2" obj-model="obj: #kuubik2; mtl: #kuubik2-mtl"></a-entity>
        <Rig>
        <a-entity>
        <a-text id="kuubikutekst" value="see on kuubik" width="1" align="center" color="#FFF" /> 
        <a-plane color="gray" scale="0.5 0.2 0" opacity="0.5" />
        </a-entity>
          <a-text id="kuubikutekst" value="see on kuubik" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="plakatitekst" value="see on hai" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
        </Rig>
      <Ceiling position="0 4 0">
     
      <a-entity light="type: point; intensity: 0.6; color: DarkCyan; castShadow: true;" position="0 -2 0"> </a-entity>
      <a-entity light="type: ambient; intensity: 0.4; color: lightblue"></a-entity>
      </Ceiling>
      <Wall position="0 0 -5">
      <a-plane 
              position="-2 0 0"
              scale="3 2 0"
              material="src: ./assets/images/shark.png"

              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>

          <a-plane 
              position="2 0 0"
              scale="3 2 0"
              material="src: ./assets/images/shark2.png"

              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>
          </Wall>
      <Wall position="-5 0 0" rotation="0 90 0">
      <a-plane 
              position="2 0 0"
              scale="3 2 0"
              material="src: ./assets/images/shark2.png"

              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>
      </Wall>
      <Wall position="5 0 0" rotation="0 -90 0"></Wall>
      <Wall position="0 0 5" rotation="0 -180 0"></Wall>
      <Box class="hover" position="1 1 0" shadow="cast: true"   
            event-set__enter="_event: mouseenter; color: red"
            event-set__leave="_event: mouseleave; color: blue"
      />
      <Floor />
       
      </Scene>
    </Layout>
    `,
})