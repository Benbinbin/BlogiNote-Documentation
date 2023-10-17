export default defineNuxtConfig({
  app: {},
  typescript: {
    shim: false
  },
  extends: ['bloginote'],
  content: {
    highlight: {
      preload: [],
    },
  },
  runtimeConfig: {
    rss: {
      title: 'BlogiNote Documentation',
      description: 'the documentation of BlogiNote.',
      image: 'https://bloginote-documentation.vercel.app/default-avatar.png',
      favicon: 'https://bloginote-documentation.vercel.app/default-favicon.ico',
      copyright: `All rights reserved ${(new Date()).getFullYear()}, Benbinbin`
    },
    public: {
      hostname: 'https://documentation.bloginote.benbinbin.com'
    }
  },
})
