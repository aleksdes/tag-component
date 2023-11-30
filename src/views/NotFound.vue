<template>
  <div class='page text-center justify-center flex-column'>
    <v-icon size='80'>
      mdi-anchor
    </v-icon>
    <div class='description'>
      Страница не найдена
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'NotFound',
})

export default class NotFound extends Vue {}
</script>

<style lang="scss" scoped>
.page {
  height: 100%;
  display: flex;

  .description {
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 120%;
    margin-top: 26px;
  }
}
</style>
