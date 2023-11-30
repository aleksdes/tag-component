<template>
  <div class='pa-5'>
    <h1 class='mb-6'>
      Теги в виде одной строки
    </h1>

    <div
      class='item'
    >
      <h3>Выравнивание слева 100%</h3>

      <BaseTags
        :tags='tagsData'
        alignment='start'
      />
    </div>

    <div
      class='item'
    >
      <h3>Выравнивание по центру 100%</h3>

      <BaseTags
        :tags='tagsData'
        alignment='center'
      />
    </div>

    <div
      class='item'
    >
      <h3>Выравнивание справа 100%</h3>

      <BaseTags
        :tags='tagsData'
        alignment='end'
      />
    </div>

    <div
      class='item w-50'
    >
      <h3>Выравнивание слева 50%</h3>

      <BaseTags
        :tags='tagsData'
        alignment='start'
      />
    </div>

    <div
      class='item w-50'
    >
      <h3>Выравнивание по центру 50%</h3>

      <BaseTags
        :tags='tagsData'
        alignment='center'
      />
    </div>

    <div
      class='item w-50'
    >
      <h3>Выравнивание справа 50%</h3>

      <BaseTags
        :tags='tagsData'
        alignment='end'
      />
    </div>

    <h1 class='mb-6'>
      Бонус!! Теги в многострочном исполнении. Здесь если тег не влезает в ширину компонента то этот тег исчезает, освобождая место следующим
    </h1>

    <div
      class='item'
    >
      <h3>Выравнивание слева 100%</h3>

      <BaseTags
        :tags='tagsData'
        alignment='start'
        :mono-row='false'
      />
    </div>

    <div
      class='item'
    >
      <h3>Выравнивание по центру 100%</h3>

      <BaseTags
        :tags='tagsData'
        alignment='center'
        :mono-row='false'
      />
    </div>

    <div
      class='item'
    >
      <h3>Выравнивание справа 100%</h3>

      <BaseTags
        :tags='tagsData'
        alignment='end'
        :mono-row='false'
      />
    </div>

    <div
      class='item w-50'
    >
      <h3>Выравнивание слева 50%</h3>

      <BaseTags
        :tags='tagsData'
        alignment='start'
        :mono-row='false'
        :tag-options='{
          color: "teal",
          textColor: "white"
        }'
      />
    </div>

    <div
      class='item w-50'
    >
      <h3>Выравнивание по центру 50%</h3>

      <BaseTags
        :tags='tagsData'
        alignment='center'
        :mono-row='false'
        :tag-options='{
          color: "pink",
          textColor: "white"
        }'
      />
    </div>

    <div
      class='item w-50'
    >
      <h3>Выравнивание справа 50%</h3>

      <BaseTags
        :tags='tagsData'
        alignment='end'
        :mono-row='false'
        :tag-options='{
          color: "light-blue",
          textColor: "white"
        }'
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import BaseTags from '@/components/common/tags/BaseTags.vue'
import IBaseTags from '@/types/baseTags'
@Component({
  name: 'HomePage',
  components: {
    BaseTags,
  },
})

export default class HomePage extends Vue {

  // mock данные
  tagsData: IBaseTags[] = [
    {
      text: 'Фринландские ворота',
    },
    {
      text: '4.3',
      icon: 'mdi-star-circle',
    },
    {
      text: '1,2км от вас',
    },
    {
      text: '4.3',
      icon: 'mdi-star-circle',
    },
    {
      text: '1,2км от вас',
    },
    {
      text: '4.3',
      icon: 'mdi-star-circle',
    },
    {
      text: '1,2км от вас',
    },
    {
      text: 'Фринландские ворота Фринландские ворота Фринландские ворота Фринландские ворота ',
      icon: 'mdi-star-circle',
    },
    {
      text: '4.3',
      icon: 'mdi-star-circle',
    },
    {
      text: '1,2км от вас',
    },
    {
      text: '4.3',
      icon: 'mdi-star-circle',
    },
    {
      text: 'Фринландские ворота Фринландские ворота Фринландские ворота',
    },
    {
      text: '1,2км от вас',
    },
    {
      text: '4.3',
      icon: 'mdi-star-circle',
    },
    {
      text: '1,2км от вас',
    },
  ]
}
</script>

<style lang="scss" scoped>
h3 {
  margin-bottom: 15px;
}

.item {
  margin-bottom: 50px;
}
</style>
