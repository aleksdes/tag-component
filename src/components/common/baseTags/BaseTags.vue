<template>
  <div
    ref='tagsWrapper'
    class='tags'
    :class='getAlignment'
  >
    <div
      v-for='(tag, index) in tagItems'
      :ref='"tag"+index+tag.type'
      :key='index+Math.random()'
      class='tags__item-box'
    >
      <v-chip
        v-if='tag.type==="tag"'
        v-bind='tagProps'
        class='tags__tag'
      >
        <v-icon
          v-if='tag && tag.icon'
          size='22'
          left
          class='tags__icon-tag'
        >
          {{ tag.icon }}
        </v-icon>

        {{ tag.text }}
      </v-chip>

      <v-icon
        v-else
        v-bind='separatorOptions'
        class='tags__separator'
      >
        {{ separator }}
      </v-icon>
    </div>
  </div>
</template>

<script lang='ts'>
import {Component, Prop, Vue} from 'vue-property-decorator'
import IBaseTags from '@/types/baseTags'

@Component({
  name: 'BaseTags',
})
export default class BaseTags extends Vue {
  @Prop({default: ()=>([]), type: Array}) tags!: IBaseTags[]
  @Prop({default: 'start', type: String}) alignment!: 'start' | 'center' | 'end'
  @Prop({default: 'mdi-circle-small', type: String}) separator!: string
  @Prop({default: true, type: Boolean}) monoRow!: boolean
  @Prop({default: ()=>({}), type: Object}) tagOptions!: any
  @Prop({default: ()=>({}), type: Object}) separatorOptions!: any

  tagItems: any[] = []
  refs!: {
    tagsWrapper: any
  }

  get tagProps() {
    return {
      color: 'white',
      label: true,
      textColor: 'black',
      ...this.tagOptions,
    }
  }

  beforeDestroy () {
    if (typeof window === 'undefined') return

    window.removeEventListener('resize', this.getTags)
  }

  mounted () {
    this.getTags()

    window.addEventListener('resize', this.getTags)
  }

  get getAlignment() {
    const alignments = {
      start: 'justify-start',
      center: 'justify-space-between',
      end: 'justify-end',
    }

    return alignments[this.alignment]
  }

  get items() {
    return this.tags.reduce((acc: any, curr:IBaseTags, index: number) => {
      acc.push({
        ...curr,
        type: 'tag',
      })
      if (index !== (this.tags.length - 1)) {
        acc.push({
          text: '',
          type: 'separator',
        })
      }
      return acc
    },[])
  }

  getTags() {
    this.tagItems = this.items

    this.monoRow ? this.getTagsFromMonoRow() : this.getTagsFromManyRow()
  }

  getTagsFromMonoRow() {
    this.$nextTick(() => {
      const tagsWrapper: any = this.$refs.tagsWrapper || null
      if (!tagsWrapper) return

      const  { width: widthWrapper }: any = tagsWrapper.getBoundingClientRect()

      let widthTags = 0
      let nextIndex = true
      this.tagItems = this.items.reduce((acc: any, curr: any, index: string | number) => {
        if (!nextIndex) {
          return acc
        }
        const tagData: any = this.$refs['tag'+index+curr.type]
        const  { width: widthTag }: any = tagData && tagData[0].getBoundingClientRect()
        widthTags = widthTags + widthTag
        if (widthTags > widthWrapper) {
          nextIndex = false
          if (curr.type === 'tag') {
            acc.pop()
          }
          return acc
        }
        acc.push(curr)
        return acc
      },[])
    })
  }

  getTagsFromManyRow() {
    this.$nextTick(() => {
      const tagsWrapper: any = this.$refs.tagsWrapper || null
      if (!tagsWrapper) return

      const  { width } = tagsWrapper.getBoundingClientRect()

      let nextIndex = true
      this.tagItems = this.items.reduce((acc: any, curr: any, index: string | number) => {
        if (!nextIndex) {
          nextIndex = true
          return acc
        }
        const tagData: any = this.$refs['tag'+index+curr.type] || null
        if (tagData) {
          const  { width:widthTag }: any = tagData && tagData[0].getBoundingClientRect()
          if (curr.type === 'tag' && widthTag > width) {
            nextIndex = false
            return acc
          }
        }
        acc.push(curr)
        return acc
      },[])
    })
  }
}
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  row-gap: 5px;
}
</style>
