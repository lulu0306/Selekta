import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
    options: {
        customProperties: true
    },
    themes: {
        light: {
        primary: '#0036b3',
        secondary: '#424242',
        accent: '#FF8419',
        error: '#e60303',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
        }
    }
    }
})

