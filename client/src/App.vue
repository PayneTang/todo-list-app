<template>
  <AppBar />
  <TodoCreateForm />
  <div>
    <h1>All todo</h1>
    <TodoList />
  </div>
</template>

<script>
import AppBar from './components/AppBar';
import TodoCreateForm from './components/TodoCreateForm';
import TodoList from './components/TodoList';

export default {
  components: {
    AppBar,
    TodoCreateForm,
    TodoList,
  },
};
</script>

<style></style>
