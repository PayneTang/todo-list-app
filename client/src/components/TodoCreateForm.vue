<template>
  <div>
    <h1>Create new todo</h1>
    <form>
      <input v-model="newTodoTitle" placeholder="Title" />
      <input v-model="newTodoContent" placeholder="Content" />
      <button v-on:click.prevent="createTodo">Create</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      todos: [],
      newTodoTitle: '',
      newTodoContent: '',
    };
  },
  methods: {
    createTodo() {
      axios
        .post(process.env.VUE_APP_API_URL + '/todo', {
          title: this.newTodoTitle,
          content: this.newTodoContent,
        })
        .catch((error) => {
          console.log('Error', error);
        });
      window.location.reload();
    },
  },
};
</script>

<style></style>
