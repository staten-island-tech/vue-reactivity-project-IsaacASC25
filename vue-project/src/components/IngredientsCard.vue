<template>
    <div>
    <h2>{{RamenItem.name}} <br></h2> 
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
flex-direction: row;
align-items: center;
border: 5px solid black;
position: relative
}

img{
  width: 67px;
  height: 67px;
}
</style>