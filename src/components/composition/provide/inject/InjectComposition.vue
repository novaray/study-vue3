<template>
  <p>{{location}}</p>
  <p>{{geolocation}}</p>
  <!--Optional Property-->
  <p>{{$props.foo}}</p>
  <input type="button" @click="onLocationChange" value="locationChange" />
  <br />
  <input type="button" @click="updateGeolocation" value="GeolocationChange" />
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'InjectComposition',
  setup () {
    const location = inject('location', 'North Korea')
    const geolocation = inject('geolocation')
    const updateGeolocation = inject('updateGeolocation')

    return {
      location,
      geolocation,
      updateGeolocation
    }
  },
  methods: {
    onLocationChange () {
      this.location = 'South Korea'
      console.error('ProvideComposition.vue에서 readonly된 값이라 변경되지 않음.')
    }
  }
}
</script>

<style scoped>

</style>
