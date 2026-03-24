<template>
  <header class="card">
      <h2>{{RamenItem.name}}</h2> 
    <div>
    <h2>{{RamenItem.name}}</h2> 
    <img :src="RamenItem.image" alt="Damian"/>
    <button @click="add">Add Ingredient</button>
    <button @click="remove">Remove Ingredient</button>
    </div>
    <button @click="$emit('add', RamenItem)">Add to Bowl</button>
    <button @click="$emit('remove', RamenItem)">Remove Topping</button>
</header>

</template>

<script setup>
defineProps ({
  RamenItem: {
    type: Object,
    requires: true
  }
})

defineEmits(['add', 'remove'])

</script>

<style scoped>
.card {
  background-color: #2a0a00;
  border: 1px solid #8b0000;
  border-radius: 12px;
  padding: 20px;
  width: 130px;
  text-align: center;
  color: #f5e6d3;
  font-family: 'Georgia', serif;
}

h2 {
  font-size: 14px;
  letter-spacing: 1px;
  margin-bottom: 10px;
  color: #f5e6d3;
}

img {
  width: 67px;
  height: 67px;
  margin-bottom: 10px;
}

button {
  display: block;
  width: 100%;
  margin-top: 8px;
  padding: 6px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Georgia', serif;
  font-size: 12px;
}
</style>