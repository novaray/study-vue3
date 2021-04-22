<template>
  <my-component v-model:foo.capitalize="bar" />
  <p>{{ bar }}</p>
  <slot-layout>
    <template v-slot:header>
      <h1>Here might be a page title</h1>
    </template>

    <template v-slot:default>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>

    <template v-slot:footer>
      <p>Here's some contact info</p>
    </template>
  </slot-layout>
  <todo-list>
    <template v-slot="{ item: todo }">
      <i class="fas fa-check"></i>
      <span class="green">{{ todo }}</span>
    </template>
  </todo-list>
  <provide-parent></provide-parent>
</template>

<script>
import { defineComponent } from 'vue'
import MyComponent from '@/components/MyComponent'
import TodoList from '@/components/TodoList'
import SlotLayout from '@/components/SlotLayout'
import ProvideParent from '@/components/provide/ProvideParent'

export default defineComponent({
  name: 'TestPage',
  data () {
    return {
      bar: 'hey you!'
    }
  },
  components: {
    SlotLayout,
    TodoList,
    MyComponent,
    ProvideParent
  }
})
</script>
