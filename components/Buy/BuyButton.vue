<template>
  <button @click="buy" class="btn btn-primary">Buy Now</button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BuyButton',
  props: {
    productId: String
  },
  methods: {
    async buy () {
      const payload = { productId: this.productId }

      // const { data: order } = await this.axios.post('https://test-aby-charms.web.app/api/order-create', payload)
      const { data: order } = await this.axios.post('http://localhost:5000/abys-charms/asia-south1/orderCreate', payload)

      const options = {
        key: 'rzp_test_4yoApRIfF9nSCZ',
        amount: order.amount_due,
        currency: order.currency,
        description: 'Payment description',
        order_id: order.id,
        theme: {
          color: '#c0a060' // Set your website theme color
        },
        handler: (response) => {
          this.verifySignature(response)
        }
      }

      // eslint-disable-next-line no-undef
      const rzp = new Razorpay(options)
      rzp.open()
    }
  }
})
</script>
