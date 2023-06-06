<style>
  video {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>

<template>
  <section class="w-full flex flex-col justify-center text-white my-2">
    <div class="video-docker w-full overflow-hidden rounded-md">
      <video class="rounded-t-md w-full" poster="@/assets/img/video-bg.webp" autoplay muted loop>
        <source src="https://files-accl.zohopublic.in/public/workdrive-public/download/qrw264a1666fd047449e18d4855f2c3abce68" type="video/mp4" >
      </video>
    </div>
    <div class="video-content shadow-inner shadow-black absolute space-y-2 text-center py-4 px-2 mx-6 w-[35%] bg-bg opacity-40">
      <h1 class="text-accent text-xs sm:text-sm md:text-base lg:text-lg font-extrabold drop-shadow-lg shadow-black">Aby's Charms</h1>
      <h3 class="text-accent font-light text-xs sm:text-sm md:text-base lg:text-lg">Where you can find the perfect earrings to match any outfit</h3>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WelcomeComponent'
})
</script>
