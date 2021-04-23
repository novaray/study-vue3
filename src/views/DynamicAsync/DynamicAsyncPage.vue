<template>
    <keep-alive-component></keep-alive-component>
    <hr/>
    <async-component></async-component>
</template>

<script>
import { defineAsyncComponent, defineComponent } from 'vue'
import KeepAliveComponent from '@/components/tabs/KeepAliveComponent'
import AsyncComponent from '@/components/async/AsyncComponent'
import LoadingComponent from '@/components/async/LoadingComponent'

export default defineComponent({
  name: 'DynamicAsyncPage',
  components: {
    KeepAliveComponent,
    AsyncComponent: defineAsyncComponent({
      loader: () => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(AsyncComponent)
          }, 3000)
        })
      },
      loadingComponent: LoadingComponent,
      delay: 1000 // 단순 컴포넌트 지연 로딩. 이 지연되는 시간에도 setTimeout은 돌아가고 있다.
    })
  }
})

</script>

<style scoped>

</style>
