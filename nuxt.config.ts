// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Earrings, Jhumka, Jhumki - Shop Traditional & Modern Indian Styles Online - Aby\'s Charms',
      meta: [
        { name: "description", content: "Shop the latest collection of traditional and modern Indian earrings, jhumka, and jhumki online. Elevate your style with our exquisite collection of handcrafted and affordable earrings." },
        { name: "keywords", content: "Indian earrings, Jhumka, Jhumki, traditional earrings, modern earrings, ethnic earrings, handcrafted earrings, Indian jewelry, fashion accessories, cultural heritage, affordable earrings, high-quality earrings, fashionable earrings, unique earrings, stylish earrings" },
        { name: "robots", content: "nofollow, noimageindex" },
        { name: "googlebot-news", content: "none" },
        { name: "googlebot", content: "nofollow, noarchive, noimageindex" },
        { name: "otherbot", content: "nofollow, noarchive, noimageindex" },
        // Facebook
        { property: "og:url", content: "https://www.abyscharms.com/" },
        { name: "og:title", content: "Indian Earrings, Jhumka, Jhumki - Shop Traditional & Modern Styles Online" },
        { name: "og:description", content: "Shop the latest collection of traditional and modern Indian earrings, jhumka, and jhumki online. Elevate your style with our exquisite collection of handcrafted and affordable earrings." },
        { name: "og:image", content: "https://www.abyscharms.com/image/og_image.jpg" },
        { name: "og:type", content: "product" },
        { name: "og:image:type", content: "image/jpg" },
        // Twitter
        { property: "twitter:url", content: "https://www.abyscharms.com/" },
        { property: "twitter:domain", content: "www.abyscharms.com/" },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:title", content: "Aby's Charms" },
        { property: "twitter:description", content: "Aby's Charms, presented by Aby & Co." },
        { property: "twitter:image", content: "https://www.abyscharms.com/image/og_image.jpg" },
        { property: "twitter:image:type", content: "image/jpg" },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet' },
        { rel: "apple-touch-icon", sizes: "180x180", href: "apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest", crossorigin: "use-credentials" }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // ssr: false,
  routeRules: {
    '/': { static: true },
    '/about': { static: true }
  }
})
