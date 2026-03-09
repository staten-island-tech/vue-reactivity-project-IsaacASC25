<template>
  <header>
      <h2>{{RamenItem.name}}</h2> 
    <div>
    <img :src="RamenItem.image" alt="Damian"/>
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
header{
  margin: 50px;
  align-items: center;
}
div {
  display: flex;
flex-direction: row;
align-items: center;
position: relative;
font-size: 20px;
}

img{
  width: 67px;
  height: 67px;
  display:grid;
  place-items: center;
  }
</style>