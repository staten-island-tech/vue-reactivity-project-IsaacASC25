<template>
  <h1 class="title">Ramen Maker</h1>
  <div class="bowl">
  <img class="base" src="/Base.png" alt="bowl"/>
  <img class="topping" v-for="RamenItem in RamenItems" v-show="RamenItem.selected" :src="RamenItem.image" :key="RamenItem.name"/> 
  </div>
  <p class="total"> Total: ${{ RamenItems.filter(i => i.selected).reduce((sum, i) => sum + i.price, 0).toFixed(2) }}</p>
  <div class="container">
    <IngredientsCard v-for="RamenItem in RamenItems" :key="RamenItem.name" :RamenItem="RamenItem" @add="addItem" @remove="removeItem"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IngredientsCard from '@/components/IngredientsCard.vue'
const RamenItems = ref([
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

body {
  background-color: #1a0a00;
}

.title {
  text-align: center;
  font-size: 40px;
  color: #8b0000;
  letter-spacing: 8px;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.bowl {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto 10px auto;
}

.base {
  width: 300px;
  height: 300px;
}

.topping {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
}

.total {
  text-align: center;
  color: #8b0000;
  font-size: 20px;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
