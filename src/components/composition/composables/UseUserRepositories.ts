import { fetchUserRepositories } from '../api/CompositionAPI'
import { ref, onMounted, watch, Ref } from 'vue'
import { User } from '@/components/composition/interfaces/Interface'

export default function useUserRepositories (age: Ref<number>) {
  const repositories: Ref<User[]> = ref([])
  const getUserRepositories = async () => {
    repositories.value = await fetchUserRepositories(age.value)
  }

  onMounted(getUserRepositories)
  watch(age, getUserRepositories)

  return {
    repositories,
    getUserRepositories
  }
}
