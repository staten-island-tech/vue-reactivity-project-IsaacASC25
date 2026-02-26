<template>
    <div>
    <h2>{{RamenItem.name}}</h2>
    <img :src="RamenItem.image" alt="Damian"/>
    </div>
</template>

<script setup>
defineProps ({
  RamenItem: {
    type: Object,
    requires: true
  }
})
</script>

<style scoped>
div {
  display: flex;
  width:100%;
flex-direction: row;
}
</style>