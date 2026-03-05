<template>
  <header>
    <div class = "OverRamen"></div>
    <div>
    <h2>{{RamenItem.name}}</h2> 
    <img :src="RamenItem.image" alt="Damian"/>
    <button @click="add">Add Ingredient</button>
    <button @click="remove">Remove Ingredient</button>
    </div>
</header>

</template>

<script setup>
defineProps ({
  RamenItem: {
    type: Object,
    requires: true
  }
})
function addingredient(add) {

  
  if (event) {
    alert(event.target.tagName)
  }
}
</script>

<style scoped>
header{
  margin: 50px;
  align-items: center;
}
div {
  display: flex;
flex-direction: column;
align-items: center;
position: relative;
font-size: 20px;
padding: 20px;
left: 0;
}

img{
  width: 67px;
  height: 67px;
  display:grid;
  place-items: center;
  }

</style>