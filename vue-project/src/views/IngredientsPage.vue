<template>
    <div>
    <h1>Ramen</h1>
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
  { name: 'Corn', image: '' },
  { name: 'Narutomaki (Fish Cake)', image: '/Naruto.png' },
  { name: 'Bean Sprouts', image: '' },
  { name: 'Sesame Seeds', image: '' },
  { name: 'Chili Oil', image: '' },
])

</script>

<style scoped>
div{
  display: flex;
  flex-wrap: wrap;
flex-direction: row;
}
</style>