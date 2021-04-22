<template>
  <ul>
    <li v-for="(item, index) in items">
      <slot :item="item"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      items: ['Feed a cat', 'Buy milk']
    }
  }
}
</script>
