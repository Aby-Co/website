<template>
    <NavBar :class="{ 'shadow-xl': pos > 10 }"/>
    <div class="container mx-auto px-2 bg-bg min-h-screen">
      <NuxtPage />
      <div class="mx-auto my-2">
        <Footer></Footer>
      </div>
    </div>
    <div @click="scrollToTop" v-if="pos > 500" class="sticky w-full flex justify-end bottom-0 pb-3 pr-5 transition">
      <span class="material-icons bg-accent text-bg rounded-full p-2 z-50 cursor-pointer shadow-lg shadow-black">keyboard_arrow_up</span>
    </div>
</template>

<script>
import Footer from '@/components/Footer/Footer.vue'
import NavBar from '@/components/Header/NavBar.vue'

let scrollListener

export default defineComponent({
  name: 'AppView',
  components: {
    NavBar,
    Footer
  },
  setup () {
    let pos = 0
    if (process.client) {
      pos = ref(window.pageYOffset)
    }
    return { pos }
  },
  mounted () {
    if (process.client) {
      const self = this
      scrollListener = addEventListener('scroll', async function () {
        const pos = window.pageYOffset
        if (self.pos !== pos) {
          self.pos = pos
        }
      })
    }
  },
  unmounted () {
    if (process.client) {
      removeEventListener('scroll', scrollListener)
      scrollListener = null
    }
  },
  methods: {
    scrollToTop: function () {
      if (process.client) {
        window.scroll({ top: 0, behavior: 'smooth' })
      }
    }
  }
})
</script>
