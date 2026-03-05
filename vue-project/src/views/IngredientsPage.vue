<template>
  <h1 class = "title">Ramen Maker</h1>
    <div class = "container">
     <IngredientsCard v-for="RamenItem in RamenItems" :key ="RamenItems.name" :RamenItem = "RamenItem"></IngredientsCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IngredientsCard from '@/components/IngredientsCard.vue'
const RamenItems = ref([
  { name: 'Broth', image: '/Base.png', price: 8},
  { name: 'Chashu (Pork)', image: '/Chashu.png', price: 4 },
  { name: 'Soft-Boiled Egg', image: '/Tomago.png', price: 2 },
  { name: 'Green Onions', image: '/Greens.png', price: 1 },
  { name: 'Nori (Seaweed)', image: '/Nori.png', price: 1 },
  { name: 'Bamboo Shoots (Menma)', image: '/Bambuu.png', price: 2 },
  { name: 'Corn', image: '/Corn.png', price: 2 },
  { name: 'Narutomaki (Fish Cake)', image: '/Naruto.png', price: 2 },
  { name: 'Jalapenos', image: '/Jalapenos.png', price: 3 },
  { name: 'Sesame Seeds', image: '/SesameSeeds.png', price: 1 },
])

</script>

<style scoped>
.title {
display: flex;
justify-content: center;
font-size: 50px;
}
.container {
  display: flex;
  justify-content: center;
}
div{
  display: flex;
  left:0;
}
</style>