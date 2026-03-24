<template>
  <div class="app">
    <IngredientsPage/>
  </div>
</template>

<script setup>
import IngredientsPage from '@/views/IngredientsPage.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.app {
  padding-top: 35px;
  background-color: #1a0a00;
  min-height: 100vh;
}
</style>