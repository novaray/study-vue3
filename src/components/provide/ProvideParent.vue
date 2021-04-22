<template>
  <h2>Hi, I'm provide Parent.</h2>
  <Child></Child>
  <button v-on:click="handleClick">push array</button>
</template>

<script>
import Child from '@/components/provide/child/Child'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Parent',
  components: { Child },
  data () {
    return {
      parentData: ['a', 'b', 'c']
    }
  },
  // provide: {
  //   parentDataLength: 3
  // }
  provide () {
    return {
      parentDataLength: computed(() => this.parentData.length)
    }
  },
  methods: {
    handleClick () {
      this.parentData.push('d')
      console.log(this.parentData)
    }
  }
})

</script>

<style scoped>

</style>
