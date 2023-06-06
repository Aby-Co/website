<style>
.slider {
  overflow-y: hidden;
  max-height: 100000px; /* approximate max height */
  opacity: 1;

  transition-property: all;
  transition-duration: .5s;
  transition-timing-function: ease-in-out;
}

.slider.closed {
  max-height: 0;
  opacity: 0;
}

span.material-icons {
  transition-property: all;
  transition-duration: .5s;
  transition-timing-function: ease-out;

  transform: rotate(0deg);
}

span.material-icons.open {
  transform: rotate(-90deg);
}

</style>

<template>
  <div class="panel">
    <button
      @click.prevent="togglePanel" class="p-4 bg-accent text-white w-full border-b-2 rounded font-semibold flex flex-row items-center justify-between">
      {{ title }}:
      <!-- <span class="material-icons" v-if="showPanel">
        expand_more
      </span> -->
      <span class="material-icons" :class="{ open: showPanel }">
        chevron_right
      </span>
    </button>
    <div key="1" class="bg-bg slider" :class="{ closed: !showPanel, invisible: !showPanel }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AccordionPanel',
  props: {
    title: { type: String, required: true },
    id: { type: String, required: true }
  },
  data () {
    const hash = '#' + this.id
    return { hash, showPanel: this.$route.hash === hash }
  },
  methods: {
    togglePanel () {
      this.showPanel = !this.showPanel
    }
  }
})
</script>
