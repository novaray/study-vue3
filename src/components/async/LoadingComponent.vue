<template>
  <h1>Now Loading...</h1>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoadingComponent',
  created () {
    console.log('LoadingComponent Created...')
  }
})

</script>

<style scoped>

</style>
