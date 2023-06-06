<style>
ul>li {
  margin: 0.5rem auto;
}
.footer>article {
  padding: 0.25rem;
}
.footer>article>ul {
  margin-bottom: 14px;
  margin-left: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
article>h4 {
  font-weight: bold;
  text-transform: uppercase;
  color: theme('colors.accent');
}
</style>

<template>
  <section class="footer container mx-auto p-12 grid grid-cols-2 md:grid-cols-3 text-left text-sm">
    <article>
      <h4>Who we are</h4>
      <ul>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
      <h4>Help</h4>
      <ul>
        <li>
          <router-link to="/about#privacy">Privacy Policy</router-link>
        </li>
        <li>
          <router-link to="/about#return">Return & Refund Policy</router-link>
        </li>
        <li>
          <router-link to="/about#cancellation">Cancellation Policy</router-link>
        </li>
        <li>
          <router-link to="/about#data">Data Storage and Usage</router-link>
        </li>
      </ul>
    </article>
    <article>
      <h4>Other marketplaces</h4>
      <ul>
        <li>
          <a class="flex items-center" href="https://www.meesho.com/mjzgn" target="_blank">
            Meesho&nbsp;
            <span class="material-icons text-sm">open_in_new</span>
          </a>
        </li>
      </ul>
    </article>
    <article>
      <h4>Contact Us</h4>
      <ul>
        <li>Support:&nbsp;
          <a href="mailto:sylvester@abyscharms.com">sylvester@abyscharms.com</a>
        </li>
      </ul>
    </article>
  </section>
  <div class="container mx-auto pb-4 font-light text-center">Copyright © {{ year }} ABY & CO.</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterComponent',
  data () {
    const now = new Date()
    return {
      year: now.getFullYear()
    }
  }
})
</script>
