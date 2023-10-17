// the alternative to Nuxt theme https://nuxt-themes.netlify.app/
export default defineAppConfig({
  bloginote: {
    meta: {
      name: 'BlogiNote Documentation',
      description: 'The documentation of BlogiNote, which is a Nuxt theme.',
      author: 'Benbinbin',
      url: 'https://blogi-note-documentation.vercel.app/'
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
        show: false,
        threshold: 30
      },
      showCatalog: true
    }
  }
})
