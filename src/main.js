import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import * as directives from 'vuetify/directives'






const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi,
        },
    }
  })
createApp(App)
.use(vuetify)
.mount('#app')


