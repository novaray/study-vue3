import { ref, computed, Ref } from 'vue'
import { User } from '@/components/composition/interfaces/Interface'

export default function useRepositoryNameSearch (repositories: Ref<User[]>) {
  const searchQuery = ref('')
  const repositoriesMatchingSearchQuery = computed(() => {
    return repositories.value.filter((repository:User) => {
      return repository.name.includes(searchQuery.value)
    })
  })

  return {
    searchQuery,
    repositoriesMatchingSearchQuery
  }
}
