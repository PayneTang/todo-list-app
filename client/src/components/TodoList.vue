<template>
  <ul class="list-group" v-for="todo in todos" v-bind:key="todo._id">
    <li class="list-group-item">
      <div class="card-body">
        <h5 class="card-title">
          <input
            type="checkbox"
            v-model="todo.completed"
            @change="toggleTodo(todo._id)"
            style="margin-right: 5px"
          />
          {{ todo.title }}
        </h5>
        <p class="card-text">
          {{ todo.content }}
        </p>
        <p class="card-text">
          <small class="text-muted"
            >Created {{ convertDateTime(todo.created) }}</small
          >
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
import axios from 'axios';
import getApiUrl from '../getApiUrl';
let API_URL = getApiUrl();

export default {
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    getAllTodos() {
      axios
        .get(API_URL + '/todo')
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
      axios.patch(`${API_URL}/todo/${todoId}`, updated).catch((error) => {
        console.log('Error', error);
      });
    },
    convertDateTime(inputDateTime) {
      const dateTime = new Date(inputDateTime);
      // console.log(dateTime);
      const year = dateTime.getFullYear();
      const month = dateTime.getMonth();
      const date = dateTime.getDate();
      console.log(`${date}/${month}/${year}`);
      return dateTime;
    },
  },
  created() {
    this.getAllTodos();
  },
};
</script>

<style></style>
