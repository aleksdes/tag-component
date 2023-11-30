<template>
  <v-app id='app'>
    <v-main>
      <component :is='layout'>
        <v-fade-transition mode='out-in'>
          <router-view />
        </v-fade-transition>
      </component>
    </v-main>

    <notifications
      class='notifications'
      group='app-front'
      position='bottom right'
    />
  </v-app>
</template>

<script lang='ts'>
import {Component, Vue} from 'vue-property-decorator'

@Component({
  name: 'App',
})

export default class App extends Vue {
  get layout() {
    if (!this.$route.name) return ''
    return this.$route.meta?.layout || 'DefaultLayout'
  }
}
</script>
