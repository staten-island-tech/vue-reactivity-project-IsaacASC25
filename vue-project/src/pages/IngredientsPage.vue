<template>
    <div class = "containers">
      <p class = "Ramen"></p>
      <p class = "Ramen-toppings"></p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import RamenBowl from './RamenBowl.vue';
let price = 0
const ramenItems = ref([
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

</script>

<style scoped>
.Ramen {
position: relative
}

.Ramen-toppings {
position: absolute
}
</style>