import { leftBlogList } from '@/utils/product'
import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const productList = reactive([])
  const product = ref(null)
  const maxProducts = 6

  function changeProductsList(newProduct) {
    if (productList.length >= maxProducts) return
    if (!productList.some(p => p.id === newProduct.id)) {
      productList.push(newProduct)
    }
  }

  function changeProductList(newProduct) {
    product.value = newProduct
  }

  function deleteProduct(productToDelete) {
    const index = productList.findIndex(p => p.id === productToDelete.id)
    if (index !== -1) {
      productList.splice(index, 1)
    }
  }

  function deleteSelectedProduct() {
    product.value = null
  }

  const getProductList = computed(() => {
    return leftBlogList.filter(element =>
      !productList.some(p => p.id === element.id)
    )
  })

  return {
    productList,
    product,
    getProductList,
    changeProductsList,
    changeProductList,
    deleteProduct,
    deleteSelectedProduct
  }
})
