import Layout from './components/Layout.js'
import Scene from './components/Scene.js'
import Box from './components/Box.js'
import Wall from './components/wall.js'
import Floor from './components/Floor.js'
import Ceiling from './components/Ceiling.js'
import Rig from './components/Rig.js'

new Vue({
    el: '#app',
    components: { Layout, Box, Scene, Wall, Floor, Ceiling, Rig },
    template: `
    <Layout>
      <Scene>
        <template v-slot:assets>
          <a-assets>

          

          </a-assets>
        </template>

        <a-entity class="kuubik2" obj-model="obj: #kuubik2; mtl: #kuubik2-mtl"></a-entity>
        <Rig>
        <a-entity>
        <a-text id="kuubikutekst" value="see on kuubik" width="1" align="center" color="#FFF" /> 
        <a-plane color="gray" scale="0.5 0.2 0" opacity="0.5" />
        </a-entity>
          <a-text id="kuubikutekst" value="see on kuubik" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="plakatitekst" value="joonistused" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="plakatitekst1" value="Kompositsioon nimetähtedest" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="plakatitekst2" value="Taimstilisatsioon" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
        </Rig>
      <Ceiling position="0 4 0">
      <a-entity light="type: point; intensity: 0.6; color: DarkCyan; castShadow: true;" position="0 -2 0"> </a-entity>
      <a-entity light="type: ambient; intensity: 0.4; color: lightblue"></a-entity>
      </Ceiling>
      <Wall position="0 0 -5">
      <a-plane 
              position="-3 0 0"
              scale="2.2 3 0"
              material="src: ./assets/images/monok.png"

              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>

          <a-plane 
              position="0 0 0"
              scale="2 2 0"
              material="src: ./assets/images/GJkuubik.png"

              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst1; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst1; visible: false"
          ></a-plane>

          <a-plane 
              position="3 0 0"
              scale="2.2 3 0"
              material="src: ./assets/images/ultramariinjasienna.png"

              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>
          </Wall>
      <Wall position="-5 0 0" rotation="0 90 0">
      <a-plane 
              position="2 0 0"
              scale="3 2 0"
              material="src: ./assets/images/tintekas.png"

              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>

          <a-plane 
              position="-2.3 0 0"
              scale="3 2 0"
              material="src: ./assets/images/vaasid.png"

              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>
      </Wall>
      <Wall position="5 0 0" rotation="0 -90 0">
      <a-plane 
              position="-3 0 0"
              scale="3 2 0"
              material="src: ./assets/images/kuubikud.png"

              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>

          <a-plane 
              position="0 0 0"
              scale="2 3 0"
              material="src: ./assets/images/lillepott_2.png"

              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>

          <a-plane 
              position="3 0 0"
              scale="3 2 0"
              material="src: ./assets/images/ymmargused.png"

              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>

      </Wall>
      <Wall position="0 0 5" rotation="0 -180 0">
      <a-plane 
              position="-2.5 0 0"
              scale="4 2 0"
              material="src: ./assets/images/maasikas1.png"

              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst2; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst2; visible: false"
          ></a-plane>

          <a-plane 
              position="2 0 0"
              scale="4 2 0"
              material="src: ./assets/images/maasikas2.png"

              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst2; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst2; visible: false"
          ></a-plane>
      </Wall>
      <Box class="hover" position="1 1 0" shadow="cast: true"   
            event-set__enter="_event: mouseenter; color: red"
            event-set__leave="_event: mouseleave; color: blue"
      />
      <Floor />
       
      </Scene>
    </Layout>
    `,
})