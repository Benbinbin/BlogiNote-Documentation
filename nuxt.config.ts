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
      image: 'https://documentation.bloginote.benbinbin.com/default-avatar.png',
      favicon: 'https://documentation.bloginote.benbinbin.com/default-favicon.ico',
      copyright: `All rights reserved ${(new Date()).getFullYear()}, Benbinbin`
    },
    public: {
      hostname: 'https://documentation.bloginote.benbinbin.com'
    }
  },
})
