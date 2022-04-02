<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink class="nav-link" to="/">List</RouterLink>
      <RouterLink class="nav-link" to="/edit">Edit</RouterLink>
    </nav>
  </header>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";

nav {
  display: flex;
  height: 60px;
  padding: 10px;
  width: 100%;
  gap: 20px;
  background: #add8e630;
  box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 8%);
}
.nav-link {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 26px;
  text-decoration: none;
  color: #000;
}

.nav-link:hover {
  color: gray;
}
.wrapper {
  padding: 10px;
  display: flex;
}
</style>
