<template>
  <div class='h-100'>
    <div class='main-wrap h-100 overflow-y-auto overflow-x-hidden white-gray scroll'>
      <slot />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component<Page404>({
  name: 'Page404',
})
export default class Page404 extends Vue {}
</script>
