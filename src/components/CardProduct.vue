<template>
  <div @click="selectProduct" class="card-container">
    <p>{{ product.name }}</p>
    <p>ID - {{ product.id }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})
const emit = defineEmits(['select'])

function selectProduct() {
  emit('select', props.product)
}
</script>

<style scoped>
.card-container {
  width: 100px;
  height: max-content;
  text-align: center;
  border: 1px solid white;
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s;
}
.card-container:hover {
  transform: scale(1.2);
}
</style>
