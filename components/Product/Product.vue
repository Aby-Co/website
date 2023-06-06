<template>
  <article class="max-w-sm rounded-md shadow hover:shadow-lg text-center overflow-hidden mx-auto bg-bg text-black">
    <ClientOnly>
      <div @click="showModal">
        <img :src="`/image/products/${product.id}/00.webp`" width="384" height="384"
          @error="$event.target.src = 'https://via.placeholder.com/300x300'"
          :alt="product.title" class="w-full h-fit cursor-pointer" />
        <div class="font-bold line-clamp-1 text-xs sm:text-sm md:text-base lg:text-lg pt-4 capitalize">{{ product.title }}
        </div>
        <div class="px-6 h-16 md:h-[4.5rem] lg:h-[5.5rem] center">
          <span class="text-xs sm:text-sm md:text-base lg:text-lg mx-1 line-clamp-3 text-align-bottom">{{ product.subtitle
          }}</span>
        </div>
        <div class="text-2xl font-semibold text-accent my-4 flex items-center justify-center">
          <span class="line-through font-normal text-sm text-primary">MRP&nbsp;{{ product.mrp }}</span>&nbsp;&#8377;{{
            product.priceINR }}
        </div>
      </div>
      <button @click="order"
        class="bg-accent hover:bg-cyan-400 w-full text-bg uppercase font-extrabold flex justify-center items-center py-4 space-x-2">
        <img width="20px" height="20px" src="@/assets/img/WhatsApp.svg" alt="send whatsapp message" class="h-5">
        <span class="text-xs sm:text-sm md:text-base lg:text-lg">Order now</span>
      </button>
    </ClientOnly>

    <!-- modal -->
    <Modal v-if="show" :product="product" @hide="hideModal" />
  </article>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Modal from './Modal.vue'

export default defineComponent({
  name: 'ProductComponent',
  components: {
    Modal
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      show: ref(false)
    }
  },
  methods: {
    order() {
      const url = new URL('https://wa.me')
      url.pathname = '918446600164'
      url.searchParams.set('text', `Hi, I would like to order earrings with SKU id: ${this.product.id}`)
      window.open(url, '_blank', 'noreferrer')
    },
    showModal () {
      this.show = true
    },
    hideModal () {
      this.show = false
    }
  }
})

</script>
