// the alternative to Nuxt theme https://nuxt-themes.netlify.app/
export default defineAppConfig({
  theme: {
    meta: {
      name: 'BlogiNote Documentation',
      description: 'The documentation of BlogiNote, which is a Nuxt theme.',
      author: 'Benbinbin',
      url: 'https://documentation.bloginote.benbinbin.com/'
    },
    author: 'Benbinbin',
    email: 'benthomsonbin@gmail.com',
    avatar: '/default-avatar.png',
    favicon: '/default-favicon.ico',
    homePage: {
      showBlogPosts: true,
      postItemLimit: 20
    },
    subscribePage: true,
    articlePage: {
      showTime: true,
      outdated: {
        show: true,
        threshold: 30
      },
      showBlogCatalog: false,
      showNoteCatalog: false
    }
  }
})
