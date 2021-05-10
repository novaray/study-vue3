import { User } from '@/components/composition/interfaces/Interface'

const userRepositories: User[] = [
  { id: 1, name: 'skkim', age: 31 },
  { id: 2, name: 'sungkwon', age: 31 },
  { id: 3, name: 'sk', age: 32 },
  { id: 4, name: 'kim', age: 33 },
  { id: 5, name: 'kwonsung', age: 34 }
]

export function fetchUserRepositories (age: number) {
  return new Promise<User[]>(resolve => {
    resolve(
      userRepositories.filter(t => t.age === age) ?? []
    )
  })
}
