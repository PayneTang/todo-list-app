<template>
  <TodoCreateForm />
  <div>
    <h1>All todo</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoCreateForm from './components/TodoCreateForm';
import TodoList from './components/TodoList';

export default {
  components: {
    TodoCreateForm,
    TodoList,
  },
};
</script>

<style></style>
