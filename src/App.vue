<script setup>
import CardProduct from "./components/CardProduct.vue";
import CardSelectedProduct from "./components/CardSelectedProduct.vue";
import { rightBlogList } from "./utils/product";
import { useProductStore } from "./stores/product";

const store = useProductStore();

function handleProducts(product) {
  store.changeProductsList(product);
}

function handleProduct(product) {
  store.changeProductList(product);
}

function deleteProduct(product) {
  store.deleteProduct(product);
}

function deleteSelected(product) {
  store.deleteSelectedProduct(product);
}
</script>

<template>
  <main>
    <div class="header-container">
      <div class="left-blog">
        <template v-if="!store.productList.length">
          <div class="empty-text">Select items</div>
        </template>
        <template v-else>
          <CardProduct
            v-for="product of store.productList"
            :key="product.id"
            :product="product"
            @select="deleteProduct"
          />
        </template>
      </div>

      <div>
        <CardSelectedProduct
          v-if="store.product"
          :product="store.product"
          @select="deleteSelected"
        />
        <div class="empty-text" v-else>Select Item</div>
      </div>
    </div>

    <div class="conteiner">
      <div>
        <CardProduct
          @select="handleProducts"
          v-for="product of store.getProductList"
          :key="product.id"
          :product="product"
        />
      </div>
      <div>
        <CardProduct
          @select="handleProduct"
          v-for="product of rightBlogList"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
.conteiner {
  display: flex;
  justify-content: space-between;
}
.header-container {
  display: flex;
  justify-content: space-between;
  border: 1px solid white;
  min-height: 48px;
  margin: 10px;
}
.header-container .left-blog {
  display: flex;
  max-width: 360px;
  flex-wrap: wrap;
}
.empty-text {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
