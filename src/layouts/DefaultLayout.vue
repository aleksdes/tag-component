<template>
  <div class='h-100'>
    <div class='main-wrap h-100 white-gray scroll'>
      <slot />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'DefaultLayout',
  components: {},
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss" scoped>
.main-wrap {
  background-color: $light-gray-6;
  height: inherit;

  & > :deep div {
    height: 100%;
  }
}
</style>
