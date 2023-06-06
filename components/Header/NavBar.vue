<style>
nav .exact-active {
  color: theme('colors.primary');
}
</style>

<template>
  <nav class="sticky top-0 w-full bg-bg rounded mb-4 text-black font-extrabold pl-10 z-40">
    <div class="container mx-auto flex align-middle h-20">
      <router-link class="h-full align-middle" to="/">
        <img class="h-full py-3" src="@/assets/logo.svg" alt="logo" width="56px" height="56px" />
      </router-link>
      <div class="flex-1 px-6 flex justify-end text-center text-sm sm:text-base md:text-base lg:text-lg">
        <router-link to="/" class="self-center px-4 text-center">Home</router-link>
        <router-link to="/about" class="self-center px-4 text-center">About</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "NavBar"
})
</script>
