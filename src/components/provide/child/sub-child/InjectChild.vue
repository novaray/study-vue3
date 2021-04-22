<template>
  <div>
    <p>{{parentDataLength.value}}</p>
  </div>
</template>

<script>

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InjectChild',
  inject: ['parentDataLength'],
  created () {
    console.log(`Injected property: ${this.parentDataLength.value}`)
  }
})

</script>

<style scoped>

</style>
