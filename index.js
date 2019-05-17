import Layout from './components/Layout.js'
import Scene from './components/Scene.js'
import Box from './components/Box.js'
import Wall from './components/wall.js'
import Floor from './components/Floor.js'
import Ceiling from './components/Ceiling.js'

new Vue({
    el: '#app',
    components: { Layout, Scene, Box, Wall, Floor, Ceiling },
    template: `
    <Layout>
      <Scene>
        <template v-slot:assets>
          <a-assets>
                    
          </a-assets>
        </template>
      <Ceiling position="0 4 0">
      <a-entity material="color: white; emissive: yellow; emissiveIntensity: 2;"class="chandelier" position="0 2.5 0" scale="0.001 0.001 0.001" obj-model="obj: #chandelier"></a-entity>
      <a-entity light="type: point; intensity: 0.6; color: white; castShadow: true;" position="0 -2 0"> </a-entity>
      <a-entity light="type: ambient; intensity: 0.4; color: white"></a-entity>
      </Ceiling>
      <Wall position="0 0 -5"/>
      <Wall position="-5 0 0" rotation="0 90 0"/>
      <Wall position="5 0 0" rotation="0 -90 0"/>
      <Wall position="0 0 5" rotation="0 -180 0"/>
      <Box position="1 1 0" shadow="cast: true"/>
      <Floor />
       
      </Scene>
    </Layout>
    `,
})