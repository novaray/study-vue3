<template>
  <div>hello, I'm child</div>
  <InjectChild></InjectChild>
</template>

<script>
import InjectChild from '@/components/provide/child/sub-child/InjectChild'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Child',
  components: { InjectChild }
})

</script>

<style scoped>

</style>
