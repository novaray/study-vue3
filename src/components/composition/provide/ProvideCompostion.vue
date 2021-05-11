<template>
  <inject-composition></inject-composition>
</template>

<script>
import InjectComposition from '@/components/composition/provide/inject/InjectComposition'
import { ref, reactive, provide, readonly } from 'vue'

export default {
  name: 'ProvideCompostion',
  components: { InjectComposition },
  setup () {
    // ref나 reactive를 이용해 반응성(Reactivity)있게 만들 수 있다.
    const location = ref('North Korea')
    const geolocation = reactive({
      longitude: 125,
      latitude: 39
    })

    const updateGeolocation = () => {
      geolocation.longitude = 125.738
      geolocation.latitude = 39.019
    }

    provide('location', readonly(location))
    provide('geolocation', geolocation)
    provide('updateGeolocation', updateGeolocation)
  }
}
</script>

<style scoped>

</style>
