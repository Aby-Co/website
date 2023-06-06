<template>
  <Welcome />
  <p class="shadow rounded text-center text-xs sm:text-sm md:text-base lg:text-lg text-black font-semibold my-2 mx-auto p-6 bg-bg">
    We sell a variety of earrings, including Golden Jhumkas, Golden Earrings, and Oxidised Jhumkas.
  </p>
  <div class="mx-auto my-2 text-center">
    <ProductList />
  </div>
</template>

<script>
import Welcome from '@/components/Welcome/Welcome.vue'
import ProductList from '@/components/Product/ProductList.vue'
import { defineComponent } from 'vue'

// @ is an alias to /src
export default defineComponent({
  name: 'HomeView',
  components: {
    Welcome,
    ProductList
  },
  methods: {
    async verifySignature (response) {
      // const res = await this.axios.post(`/api/verifyPayment`, response)

      alert('payment received:\n' + JSON.stringify(response))
    }
  }
})
</script>
