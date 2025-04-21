<template>
  <div @click="selectProduct" class="card-container">
    <p>name - {{ product.name }}</p>
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
  width: 135px;
  height: 135px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid white;
  margin: 5px;
  cursor: pointer;
}
</style>
