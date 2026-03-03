<template>
    <div class = "container">
    <h1>Ramen</h1>
  </br>
    <IngredientsCard v-for="RamenItem in RamenItems" :key ="RamenItems.name" :RamenItem = "RamenItem"></IngredientsCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IngredientsCard from '@/components/IngredientsCard.vue'
const RamenItems = ref([
  { name: 'Broth', image: '/Base.png' },
  { name: 'Chashu (Pork)', image: '/Chashu.png' },
  { name: 'Soft-Boiled Egg', image: '/Tomago.png' },
  { name: 'Green Onions', image: '/Greens.png' },
  { name: 'Nori (Seaweed)', image: '/Nori.png' },
  { name: 'Bamboo Shoots (Menma)', image: '/Bambuu.png' },
  { name: 'Corn', image: '/Corn.png' },
  { name: 'Narutomaki (Fish Cake)', image: '/Naruto.png' },
  { name: 'Jalapenos', image: '/Jalapenos.png' },
  { name: 'Sesame Seeds', image: '/SesameSeeds.png' },
])

</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
div{
  display: flex;
  flex-wrap: wrap;
flex-direction: row;
}
</style>