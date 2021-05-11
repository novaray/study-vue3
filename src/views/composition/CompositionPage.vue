<template>
  <composition-root-component :age="31" />
  <provide-compostion />
</template>

<script>
import CompositionRootComponent from '@/components/composition/CompositionRootComponent'
import ProvideCompostion from '@/components/composition/provide/ProvideCompostion'

export default {
  name: 'CompositionPage',
  components: { ProvideCompostion, CompositionRootComponent }
}
</script>

<style scoped>

</style>
