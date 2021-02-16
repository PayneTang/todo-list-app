<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">Payne's TodoList</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#appbarDropDown"
      aria-controls="appbarDropDown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="appbarDropDown">
      <ul class="navbar-nav mr-auto">
        <!-- <li class="nav-item active">
          <a class="nav-link" href="#"
            >Home <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li> -->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return { msg: 'hi' };
  },
};
</script>

<style></style>
