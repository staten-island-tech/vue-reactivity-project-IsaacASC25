<template>
  <h1 class="title">Ramen Maker</h1>
  <div class="container">
    <IngredientsCard v-for="RamenItem in RamenItems" :key="RamenItem.name" :RamenItem="RamenItem" @add="addItem" @remove="removeItem"/>
  </div>
  <p>Total: ${{ RamenItems.filter(i => i.selected).reduce((sum, i) => sum + i.price, 0).toFixed(2) }}</p>
</template>

<script setup>
import { ref } from 'vue'
import IngredientsCard from '@/components/IngredientsCard.vue'
const RamenItems = ref([
  { name: 'Broth', image: '/Base.png', price: 7.99, selected: false },
  { name: 'Chashu (Pork)', image: '/Chashu.png', price: 3.99, selected: false },
  { name: 'Soft-Boiled Egg', image: '/Tomago.png', price: 1.89, selected: false },
  { name: 'Green Onions', image: '/Greens.png', price: 1, selected: false },
  { name: 'Nori (Seaweed)', image: '/Nori.png', price: 1.89, selected: false },
  { name: 'Bamboo Shoots (Menma)', image: '/Bambuu.png', price: 2.99, selected: false },
  { name: 'Corn', image: '/Corn.png', price: 1.99, selected: false },
  { name: 'Narutomaki (Fish Cake)', image: '/Naruto.png', price: 0.99, selected: false },
  { name: 'Jalapenos', image: '/Jalapenos.png', price: 2.89, selected: false },
  { name: 'Sesame Seeds', image: '/SesameSeeds.png', price: 0.89, selected: false },
])

const selectedItems = ref([])

function addItem(item) {
  item.selected = true
}

function removeItem(item) {
  item.selected = false
}
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
div {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>
