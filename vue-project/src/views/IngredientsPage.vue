<template>
    <div>
    <h1>Ramen</h1>
    <IngredientsCard v-for="RamenItems in RamenItems" :key ="RamenItems.name"></IngredientCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IngredientsCard from '@/components/IngredientsCard.vue'
let price = 0
const RamenItems = ref([
  { name: 'Noodles', image: '' },
  { name: 'Broth', image: '' },
  { name: 'Chashu (Pork)', image: '' },
  { name: 'Soft-Boiled Egg', image: '' },
  { name: 'Green Onions', image: '' },
  { name: 'Nori (Seaweed)', image: '' },
  { name: 'Bamboo Shoots (Menma)', image: '' },
  { name: 'Corn', image: '' },
  { name: 'Narutomaki (Fish Cake)', image: '' },
  { name: 'Bean Sprouts', image: '' },
  { name: 'Sesame Seeds', image: '' },
  { name: 'Chili Oil', image: '' },
])

defineProps ({
  RamenItems: {
    type: Object,
    requires: true
  }
})

</script>

<style scoped>
.Ramen {
position: relative;
}

</style>