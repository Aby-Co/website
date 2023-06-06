<template>
  <ClientOnly>
    <section class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-10 mx-auto">
      <Product v-for="product in products" :key="product.productId" :product="product"></Product>
    </section>
  </ClientOnly>
</template>

<script>
import { defineComponent } from 'vue'
import Product from './Product.vue'
import { collection, getDocs, query } from 'firebase/firestore'
import db from '@/firebase/init'

/* @type {require('firebase/firestore')} */
let productsSnap

export default defineComponent({
  name: 'ProductList',
  components: { Product },
  data () {
    return {
      products: []
    }
  },
  async created () {
    productsSnap = await getDocs(query(collection(db, 'products')))
    productsSnap.forEach((snap) => {
      this.products.push({ ...snap.data(), id: snap.id })
    })
  },
  unmounted () {
    productsSnap = null
  }
})
</script>
