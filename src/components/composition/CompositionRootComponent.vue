<template>
  <div>
    <h1>repositories</h1>
    <ul>
      <li
        v-for="repo in repositories"
        :key="repo.id"
      >{{repo.id}},{{repo.name}},{{repo.age}}</li>
    </ul>
    <h1>name matching repositories</h1>
    <input type="text" v-model="searchQuery" />
    <ul>
      <li
        v-for="repo in repositoriesMatchingSearchQuery"
        :key="repo.id"
      >{{repo.id}},{{repo.name}},{{repo.age}}</li>
    </ul>
  </div>
</template>

<script>
import { toRefs } from 'vue'
import useUserRepositories from '@/components/composition/composables/UseUserRepositories'
import useRepositoryNameSearch from '@/components/composition/composables/UseRepositoryNameSearch'

export default {
  name: 'CompositionRootComponent',
  props: {
    age: { type: Number }
  },
  setup (props) {
    const { age } = toRefs(props)

    const { repositories, getUserRepositories } = useUserRepositories(age)
    const { searchQuery, repositoriesMatchingSearchQuery } = useRepositoryNameSearch(repositories)

    return {
      repositories,
      getUserRepositories,
      searchQuery,
      repositoriesMatchingSearchQuery
    }
  },
  watch: {
    user: 'getUserRepositories'
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
