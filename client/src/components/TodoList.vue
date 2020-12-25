<template>
  <ul v-for="todo in todos" v-bind:key="todo._id">
    <li>
      <h3>
        <input
          type="checkbox"
          v-model="todo.completed"
          @change="toggleTodo(todo._id)"
        />
        {{ todo.title }}
      </h3>
      <p>{{ todo.content }}</p>
    </li>
  </ul>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    getAllTodos() {
      axios
        .get(process.env.VUE_APP_API_URL + '/todo')
        .then((resp) => {
          this.todos = resp.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    toggleTodo(todoId) {
      const target = this.todos.find((todo) => todo._id === todoId);
      const updated = { ...target };
      axios
        .patch(`http://localhost:5000/api/todo/${todoId}`, updated)
        .catch((error) => {
          console.log('Error', error);
        });
    },
  },
  created() {
    this.getAllTodos();
  },
};
</script>

<style></style>
