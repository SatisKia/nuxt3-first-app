import { computed, type Ref } from 'vue'
import type { Todo } from '@/types/todo'

export default (todoList: Ref<Todo[]>) => {
  const sortedTodo = computed(() => {
    return todoList.value.sort((a: Todo, b: Todo) => {
      return b.date.getTime() - a.date.getTime()
    })
  })

  return {
    sortedTodo
  }
}
