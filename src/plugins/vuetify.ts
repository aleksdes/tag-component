import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import ru from 'vuetify/lib/locale/ru'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { ru },
    current: 'ru',
  },
  theme: {
    themes: {
      light: {
        'dark-blue': '#004763',
        'dark-blue-2': '#0c89bb',
        'main-blue': '#00a0df',
        'light-blue': '#079ad5',
        'light-blue-2': '#cbf3ff',
        'dark-black': '#353f4f',
        'dark-black-1': '#202020',
        'dark-gray-1': '#2c2c2c',
        'dark-gray-2': '#3e3e3e',
        'gray-1': '#5a6268',
        'gray-2': '#6c757d',
        'gray-3': '#8c8c8c',
        'gray-4': '#acacab',
        'gray-5': '#b3b4b6',
        'light-gray': '#c3c6ca',
        'light-gray-2': '#e6e9ee',
        'light-gray-3': '#e7ecee',
        'light-gray-4': '#e6e6e6',
        'light-gray-5': '#d2d2d2',
        'white-gray': '#fbfcfd',
        'red': '#ee1d23',
        'green-1': '#38c172',
        'green-2': '#2fa360',
      },
    },
  },
})
