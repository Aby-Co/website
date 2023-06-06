<style>
#about-view .about {
  background: #fff;
  color: #000;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 28px;
  margin: 0;
}

#about-view h1,
#about-view h2 {
  font-weight: 700;
}

#about-view h3,
#about-view h4 {
  font-weight: 700;
}

#about-view h2 {
  font-size: 32px;
  line-height: 48px;
}

#about-view h3 {
  font-size: 24px;
  line-height: 36px;
}

#about-view h1 {
  font-size: 40px;
  line-height: 60px;
}

#about-view h1,
#about-view h2,
#about-view h3,
#about-view h4,
#about-view h5,
#about-view h6,
#about-view li,
#about-view p {
  margin: 0 0 16px;
}

#about-view h1 {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

#about-view ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
</style>

<template>
  <div id="about-view" class="bg-bg flex flex-col space-y-1 px-6 pb-10 mb-10 text-xs sm:text-sm md:text-base lg:text-lg">
    <AboutUs id="about" />
    <!-- <hr class="pt-4 mx-4 border-t-2 border-primary"> -->
    <AccordionPanel @click.prevent="selected('#privacy')" id="privacy" title="Privacy Policy">
      <PrivacyPolicy />
    </AccordionPanel>
    <AccordionPanel @click.prevent="selected('#return')" id="return" title="Return & Refund Policy">
      <ReturnPolicy />
    </AccordionPanel>
    <AccordionPanel @click.prevent="selected('#cancellation')" id="cancellation" title="Cancellation Policy">
      <CancellationPolicy/>
    </AccordionPanel>
    <AccordionPanel @click.prevent="selected('#data')" id="data" title="Data Storage and Usage">
      <DataStoragePolicy/>
    </AccordionPanel>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import AccordionPanel from '@/components/AccordionPanel.vue'
import PrivacyPolicy from '@/components/About/PrivacyPolicy.vue'
import ReturnPolicy from '@/components/About/ReturnPolicy.vue'
import CancellationPolicy from '@/components/About/CancellationPolicy.vue'
import DataStoragePolicy from '@/components/About/DataStoragePolicy.vue'
import AboutUs from '@/components/About/AboutUs.vue'

export default defineComponent({
  name: 'AboutView',
  components: {
    AccordionPanel,
    AboutUs,
    PrivacyPolicy,
    ReturnPolicy,
    DataStoragePolicy,
    CancellationPolicy
  },
  methods: {
    selected: function (hash) {
      return this.$router.replace({ hash })
    }
  }
})
</script>
