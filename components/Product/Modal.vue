<style>
/* The Modal (background) */
.modal {
  position: fixed;
  /* Stay in place */
  z-index: 97;
  /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  z-index: 98;
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

.close {
  z-index: 99;
}
</style>

<script>
let clickListener = null

export default defineComponent({
  name: 'Modal',
  mounted() {
    if (process.client) {
      const self = this
      const modal = document.getElementById(`modal-${this.product.id}`)
      clickListener = modal.addEventListener('click', (ev) => {
        const content = document.getElementById(`modal-content-${self.product.id}`)
        if (ev.target.contains(content) && ev.target !== content) {
          this.$emit('hide')
        }
      })
    }
  },
  unmounted() {
    if (process.client && !!clickListener) {
      removeEventListener('click', clickListener)
      clickListener = null
    }
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  }
})
</script>

<template>
  <div class="modal" :id="`modal-${product.id}`">
    <span class="close float-right font-bold text-3xl p-4 text-primary hover:text-accent focus:text-accent cursor-pointer"
      @click="$emit('hide')">&times;</span>
    <div :id="`modal-content-${product.id}`" class="modal-content rounded mx-auto px-4 bg-bg shadow-lg">
      <div class="flex my-4 mx-auto">
        <div class="my-2 mx-auto flex-1 flex flex-col items-center text-xs md:text-base">
          <h4 class="font-extrabold text-sm sm:text-base md:text-lg">
            <span>{{ product.title }}</span>
          </h4>
          <button @click="order"
            class="min-w-max align-middle bg-accent hover:bg-cyan-400 px-4 py-1 text-bg uppercase flex justify-center my-2 mx-4 rounded space-x-2">
            <img src="@/assets/img/WhatsApp.svg" alt="send whatsapp message" class="h-4 md:h-5">
            <span class="text-xs md:text-base lg:text-lg">Order now</span>
          </button>
          <p class="text-xs md:text-base lg:text-lg">{{ product.subtitle }}</p>
        </div>
      </div>
      <div class="mb-4">
        <img class="mx-auto" :src="`/image/products/${product.id}/creative1.webp`" width="800" height="500"
          @error="$event.target.src = 'https://via.placeholder.com/300x300'" :alt="product.title + ' creative image'" />
      </div>
    </div>
  </div>
</template>
