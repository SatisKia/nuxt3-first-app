<template>
  <div>
    <todo-input
      v-on:add="addTodo"
    />
    <todo-label
      v-for="todo in sortedTodo"
      v-bind:key="todo.id"
      v-bind:todo="todo"
      v-on:done="doneTodo"
      v-on:remove="removeTodo"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import type { Todo } from '@/types/todo'

interface State {
  todoList: Todo[]
}

export default defineComponent({
  setup () {
    // data
    const state = reactive<State>({
      todoList: [] as Todo[]
    })
    const { todoList } = toRefs(state)

    // methods
    const { loadData } = useData(todoList)
    const { addTodo, removeTodo, doneTodo } = useAction(todoList)

    // computed
    const { sortedTodo } = useSort(todoList)

    onMounted(async () => {
      // データの読み込み
      await loadData()
    })

    // template内で使用するプロパティ
    return {
      addTodo,
      removeTodo,
      doneTodo,
      sortedTodo
    }
  }
})
</script>
