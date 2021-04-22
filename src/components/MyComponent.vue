<template>
  <input type="text"
         :value="foo"
         @input="emitValue">
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent(
  {
    name: 'my-component',
    props: {
      foo: String,
      fooModifiers: {
        default: () => ({})
      }
    },
    created () {
      console.log(this.fooModifiers)
    },
    methods: {
      emitValue (e) {
        let value = e.target.value
        if (this.fooModifiers.capitalize) {
          value = value.charAt(0).toUpperCase() + value.slice(1)
        }
        this.$emit('update:foo', value)
      }
    }
  }
)
</script>
